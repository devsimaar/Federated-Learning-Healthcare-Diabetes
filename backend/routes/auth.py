from flask import Blueprint, request, jsonify

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/signup', methods=['POST'])
def signup():

    data = request.json

    return jsonify({
        'message': 'User Registered Successfully',
        'user': data
    })


@auth_bp.route('/login', methods=['POST'])
def login():

    data = request.json

    return jsonify({
        'message': 'Login Successful',
        'token': 'sample-jwt-token'
    })