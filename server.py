from flask import Flask, session, jsonify, request, send_from_directory
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = '17623c96-dc85-4a40-9d8b-11e8a8c1d7d0'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///adet.db'
app.config['PDF_FOLDER'] = './pdfs'

# Create db connection object
db = SQLAlchemy(app)
Column = db.Column
String = db.String
Integer = db.Integer

# Define database models


class Role(db.Model):
    id = Column(Integer, primary_key=True)
    name = Column(String(80), unique=False)
    users = db.relationship("User", backref="role", lazy=True)


class User(db.Model):
    id = Column(Integer, primary_key=True)
    email = Column(String(255), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    role_id = Column(Integer, db.ForeignKey(
        "role.id"), default=1, nullable=False)
    name = Column(String(255),  nullable=False)
    address = Column(String(255),  nullable=False)
    manager_id = Column(String(255))

@app.route('/api/pdf/<path:filename>', methods=["GET"]):
def pdf_download(filename):
    return send_from_directory(app.config["PDF_FOLDER"], filename, as_attachment=True)


@app.route('/api/login', methods=["POST"])
def login():
    email = request.form["email"]
    password = request.form["password"]
    if email and password:
        # Check credentials
        query = db.session.query(User).filter_by(
            email=email, password=password)
        credentials_valid = db.session.query(query.exists()).scalar()

        if credentials_valid:
            session['email'] = email
            user = User.query.filter_by(email=email, password=password).first()

            res = {"loginSuccess": True, "userType": user.role_id,
                   "email": user.email, "name": user.name, "address": user.address}

            if user.manager_id:
                manager = User.query.filter_by(id=user.manager_id).first()
                res["managerName"] = manager.name
                res["managerEmail"] = manager.email
            print("Login success")
            return jsonify(res)
        else:
            print("Login failed")
            return jsonify({"loginSuccess": False, "reason": "User does not exist or password is incorrect"})
    else:
        return jsonify({"loginSuccess": False, "reason": "Invalid form input"})


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
            return jsonify({"registerSuccess": False, "reason": "User already exists"})
        else:
            new_user = User(email=email, password=password,
                            name=name, address=address)
            db.session.add(new_user)
            db.session.commit()
            session['email'] = email
            return jsonify({"registerSuccess": True})
    else:
        return jsonify({"registerSuccess": False, "reason": "Invalid form input"})


def db_init():
    # Drop all necessary as Flask dev server reload causes db_init() to fire multiple tines
    db.drop_all()
    db.create_all()
    # Create two roles and two manager accounts
    db.session.add_all([
        Role(name="user"),
        Role(name="admin"),
        User(email="man@test", password="pw", name="Manager 2",
             address="some address", role_id=2),
        User(email="user@test", password="pw", name="User 1",
             address="some address", manager_id=1)
    ])
    db.session.commit()


if __name__ == "__main__":
    db_init()
    app.run()
