import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
import './barChart.scss'


type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}



export default function BarChartBox(props: Props) {



    return (
        <div className='BarChart '>
            <h2 className=" mb-3"> {props.title}  </h2>
            <div className="BarChartBox w-full h-28">
                <ResponsiveContainer width="99%" height="100%">
                    <BarChart data={props.chartData}>
                        <Tooltip
                            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: 'none' }}
                            cursor={{ fill: 'none' }}
                        />
                        <Bar dataKey={props.dataKey} fill={props.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}
