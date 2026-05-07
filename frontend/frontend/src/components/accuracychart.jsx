import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts'

const data = [
    { round: 1, accuracy: 0.63 },
    { round: 2, accuracy: 0.65 },
    { round: 3, accuracy: 0.70 },
    { round: 4, accuracy: 0.66 },
    { round: 5, accuracy: 0.68 },
    { round: 6, accuracy: 0.70 },
    { round: 7, accuracy: 0.65 },
    { round: 8, accuracy: 0.55 },
    { round: 9, accuracy: 0.65 },
]

function AccuracyChart() {

    return (
        <ResponsiveContainer
            width='100%'
            height={350}
        >

            <LineChart data={data}>

                <CartesianGrid strokeDasharray='3 3' />

                <XAxis dataKey='round' />

                <YAxis />

                <Tooltip />

                <Line
                    type='monotone'
                    dataKey='accuracy'
                />

            </LineChart>

        </ResponsiveContainer>
    )
}

export default AccuracyChart