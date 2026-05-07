from flask import Flask
from flask_cors import CORS

from routes.auth import auth_bp
from routes.prediction import prediction_bp

app = Flask(__name__)

CORS(app)

app.config['JWT_SECRET_KEY'] = 'federated-secret-key'

app.register_blueprint(auth_bp)
app.register_blueprint(prediction_bp)


@app.route('/')
def home():
    return {
        'message': 'Federated Healthcare Backend Running'
    }


if __name__ == '__main__':
    app.run(debug=True, port=5000)