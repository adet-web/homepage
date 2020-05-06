from flask import Flask, session, jsonify, request
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = '17623c96-dc85-4a40-9d8b-11e8a8c1d7d0'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///adet.db'

# Create db connection object
db = SQLAlchemy(app)
Column = db.Column
String = db.String
Integer = db.Integer

# Define database models

# class Role(db.Model):
    # id = db.Column(db.Integer, primary_key=True)
    # name = db.Column(db.String(80), unique=True)

class User(db.Model):
    id = Column(Integer, primary_key=True)
    email = Column(String(255), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    role_id = Column(Integer, default = 1, nullable=False)
    name = Column(String(255),  nullable=False)
    address = Column(String(255),  nullable=False)
    manager_id = Column(String(255))

# Roles, user = 1, manager = 2

@app.route('/api/login', methods=["POST"])
def login():
    email = request.form["email"]
    password = request.form["password"]
    
    # Check credentials
    query = db.session.query(User).filter_by(email=email, password=password)
    credentials_valid = db.session.query(query.exists()).scalar()
    if credentials_valid:
        session['email'] = email
        print("Login success")
        return jsonify({"loginSuccess": True})
    else:
        print("Login failed")
        return jsonify({"loginSuccess": False})

@app.route('/api/register', methods=["POST"])
def register():
    email = request.form["email"]
    password = request.form["password"]
    name = request.form["name"]
    address = request.form["address"]

    # Check form inputs are not empty
    if email and password and name and address:
        # Check if user already exists
        query = db.session.query(User).filter_by(email=email)
        user_exists = db.session.query(query.exists()).scalar()
        if user_exists:
            print("/api/register - user already exists")
            return jsonify({"registerSuccess": False, "cause": "User already exists"})
        else:
            new_user = User(email=email, password=password, name=name, address=address)
            db.session.add(new_user)
            db.session.commit()
            session['email'] = email
            return jsonify({"registerSuccess": True})
    else:
        return jsonify({"registerSuccess": False, "cause": "Invalid form input"})

        
if __name__ == "__main__":
    db.create_all()
    app.run()