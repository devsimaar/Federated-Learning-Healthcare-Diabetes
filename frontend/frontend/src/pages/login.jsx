import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const handleLogin = () => {

        navigate('/dashboard')
    }

    return (
        <div className='login-page'>

            <div className='login-card'>

                <h1>
                    Federated Healthcare
                </h1>

                <p>
                    Privacy Preserving Disease Prediction
                </p>

                <input
                    type='email'
                    placeholder='Enter Email'
                />

                <input
                    type='password'
                    placeholder='Enter Password'
                />

                <button onClick={handleLogin}>
                    Login
                </button>

            </div>

        </div>
    )
}

export default Login