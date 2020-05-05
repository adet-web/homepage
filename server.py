from flask import Flask, session, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = '17623c96-dc85-4a40-9d8b-11e8a8c1d7d0'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///adet.db'

# Create db connection object
db = SQLAlchemy(app)

# Define database models

# class Role(db.Model):
    # id = db.Column(db.Integer, primary_key=True)
    # name = db.Column(db.String(80), unique=True)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    role_id = db.Column(db.Integer)

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
    
    # Check if user already exists
    query = db.session.query(User).filter_by(email=email)
    user_exists = db.session.query(query.exists()).scalar()
    if user_exists:
        return "User already exists"
    else:
        new_user = User(email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        return "Success"
if __name__ == "__main__":
    db.create_all()
    app.run()