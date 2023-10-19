import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import './pieChart.scss'



const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
];

export default function PieChartBox() {






    return (
        <div className='pieChartBox w-full h-full'>
            <h2 className=' text-2xl font-bold'>Leads by Source </h2>
            <div className="pieChart w-full h-1/2 mt-10">
                <ResponsiveContainer width="99%" height="99%">

                    <PieChart  >
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}

                        />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>

                </ResponsiveContainer>
            </div>
            <div className="chartOpt flex justify-around md:justify-between items-center gap-1 md:gap-5 mt-24 flex-wrap md:flex-nowrap">
                {data.map((item) => {
                    return <div className="options text-center w-1/3 md:w-1/4 flex gap-3 md:block md:gap-0">
                        <div className="optionsTitle flex gap-2 items-center">
                            <span className='dot w-2 h-2 rounded-full ' style={{ backgroundColor: item.color }}></span>
                            <h3> {item.name} </h3>
                        </div>
                        <p> {item.value} </p>
                    </div>
                })}
            </div>
        </div>
    )
}
