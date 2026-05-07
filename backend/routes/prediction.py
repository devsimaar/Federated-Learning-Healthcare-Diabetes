from flask import Blueprint, request, jsonify

from predict import predict_disease

prediction_bp = Blueprint('prediction', __name__)


@prediction_bp.route('/predict', methods=['POST'])
def predict():

    data = request.json

    features = [
        float(data['Pregnancies']),
        float(data['Glucose']),
        float(data['BloodPressure']),
        float(data['SkinThickness']),
        float(data['Insulin']),
        float(data['BMI']),
        float(data['DiabetesPedigreeFunction']),
        float(data['Age'])
    ]

    result = predict_disease(features)

    if result == 1:
        prediction = 'Diabetic'
    else:
        prediction = 'Not Diabetic'

    return jsonify({
        'prediction': prediction
    })