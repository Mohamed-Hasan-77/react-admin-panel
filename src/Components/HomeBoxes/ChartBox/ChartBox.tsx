import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chartBox.scss'
import { Link } from 'react-router-dom';

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
}



export default function ChartBox(props: Props) {



    return (
        <div className='chartBox'>
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt="user" />
                    <span>{props.title} </span>
                </div>
                <h2 className='text-2xl font-bold'> {props.number}  </h2>
                <Link style={{ color: props.color }} to="/"> View All </Link>
            </div>
            <div className="chartInfo">

                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart width={300} height={100} data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: 'none' }}
                                position={{ y: 30 }}
                            />
                            <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="chartText text-end ">
                    <p className='percentage font-bold text-green-600 mb-3' style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}> {props.percentage}% </p>
                    <p className='chartDuration text-gray-400'> This Month </p>
                </div>
            </div>
        </div>
    )
}
