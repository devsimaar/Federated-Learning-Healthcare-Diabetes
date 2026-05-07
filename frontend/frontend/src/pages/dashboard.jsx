import Navbar from '../components/Navbar'
import AccuracyChart from '../components/AccuracyChart'

function Dashboard() {

    return (
        <>
            <Navbar />

            <div className='dashboard-page'>

                <h1>
                    Federated Learning Dashboard
                </h1>

                <div className='dashboard-grid'>

                    <div className='dashboard-card'>
                        <h2>Global Accuracy</h2>
                        <p>64%</p>
                    </div>

                    <div className='dashboard-card'>
                        <h2>Connected Clients</h2>
                        <p>2</p>
                    </div>

                    <div className='dashboard-card'>
                        <h2>Training Rounds</h2>
                        <p>10</p>
                    </div>

                </div>

                <div className='chart-container'>

                    <h2>
                        Federated Accuracy Graph
                    </h2>

                    <AccuracyChart />

                </div>

            </div>
        </>
    )
}

export default Dashboard