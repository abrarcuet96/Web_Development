import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts'
const LineChart = () => {
    const mathMarksData = [
        {
            "id": 1,
            "name": "Alice Johnson",
            "mathMarks": 85
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "mathMarks": 78
        },
        {
            "id": 3,
            "name": "Eva Williams",
            "mathMarks": 92
        },
        {
            "id": 4,
            "name": "David Brown",
            "mathMarks": 65
        },
        {
            "id": 5,
            "name": "Grace Davis",
            "mathMarks": 88
        },
        {
            "id": 6,
            "name": "Sophia Lee",
            "mathMarks": 75
        },
        {
            "id": 7,
            "name": "Oliver Martinez",
            "mathMarks": 96
        },
        {
            "id": 8,
            "name": "Liam Wilson",
            "mathMarks": 70
        },
        {
            "id": 9,
            "name": "Emma Taylor",
            "mathMarks": 82
        },
        {
            "id": 10,
            "name": "Noah Garcia",
            "mathMarks": 91
        }
    ]

    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <XAxis dataKey="name"/>
                <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;