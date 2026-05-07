import { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

function Predict() {

    const [formData, setFormData] = useState({
        Pregnancies: '',
        Glucose: '',
        BloodPressure: '',
        BMI: '',
        Age: ''
    })

    const [result, setResult] = useState('')

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handlePredict = async () => {

        try {

            const response = await axios.post(
                'http://localhost:5000/predict',
                {
                    Pregnancies: Number(formData.Pregnancies),
                    Glucose: Number(formData.Glucose),
                    BloodPressure: Number(formData.BloodPressure),
                    SkinThickness: 20,
                    Insulin: 80,
                    BMI: Number(formData.BMI),
                    DiabetesPedigreeFunction: 0.45,
                    Age: Number(formData.Age)
                }
            )

            setResult(response.data.prediction)

        } catch (error) {

            console.log(error)

        }
    }

    return (
        <>
            <Navbar />

            <div className='predict-page'>

                <div className='predict-card'>

                    <h1 className='title'>
                        Diabetes Prediction
                    </h1>

                    <p className='subtitle'>
                        Enter patient health details
                    </p>

                    <div className='input-group'>

                        <label>Pregnancies</label>
                        <input
                            type='number'
                            name='Pregnancies'
                            placeholder='Enter pregnancies count'
                            onChange={handleChange}
                        />

                    </div>

                    <div className='input-group'>

                        <label>Glucose</label>
                        <input
                            type='number'
                            name='Glucose'
                            placeholder='Enter glucose level'
                            onChange={handleChange}
                        />

                    </div>

                    <div className='input-group'>

                        <label>Blood Pressure</label>
                        <input
                            type='number'
                            name='BloodPressure'
                            placeholder='Enter blood pressure'
                            onChange={handleChange}
                        />

                    </div>

                    <div className='input-group'>

                        <label>BMI</label>
                        <input
                            type='number'
                            name='BMI'
                            placeholder='Enter BMI'
                            onChange={handleChange}
                        />

                    </div>

                    <div className='input-group'>

                        <label>Age</label>
                        <input
                            type='number'
                            name='Age'
                            placeholder='Enter age'
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        className='predict-btn'
                        onClick={handlePredict}
                    >
                        Predict Disease
                    </button>

                    {
                        result && (
                            <div className='result-box'>

                                <h2>
                                    Prediction Result
                                </h2>

                                <p>
                                    {result}
                                </p>

                            </div>
                        )
                    }

                </div>

            </div>
        </>
    )
}

export default Predict