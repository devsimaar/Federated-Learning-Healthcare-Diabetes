import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div className='navbar'>

            <div className='nav-logo'>
                Federated Healthcare
            </div>

            <div className='nav-links'>

                <Link to='/dashboard'>
                    Dashboard
                </Link>

                <Link to='/predict'>
                    Prediction
                </Link>

            </div>

        </div>
    )
}

export default Navbar