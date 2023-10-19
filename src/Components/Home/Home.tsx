import ChartBox from '../HomeBoxes/ChartBox/ChartBox'
import TopBox from '../HomeBoxes/TopBox/TopBox'
import './home.scss'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../Data'
import BarChartBox from '../HomeBoxes/BarChartBox/BarChart'
import PieChartBox from '../HomeBoxes/PieChartBox/PieChartBox'
import WaveChart from '../HomeBoxes/WaveChart/WaveChart'

const Home = () => {


    return <>

        <section className="home">
            <div className="container">

                <div className='box box1'> <TopBox /> </div>
                <div className='box box2'> <ChartBox {...chartBoxUser} /> </div>
                <div className='box box3'> <ChartBox {...chartBoxProduct} /> </div>
                <div className='box box4'> <PieChartBox /> </div>
                <div className='box box5'> <ChartBox {...chartBoxRevenue} /> </div>
                <div className='box box6'> <ChartBox {...chartBoxConversion} /> </div>
                <div className='box box7'> <WaveChart /> </div>
                <div className='box box8'> <BarChartBox {...barChartBoxRevenue} /> </div>
                <div className='box box9'> <BarChartBox {...barChartBoxVisit} /> </div>

            </div>
        </section>
    </>

}

export default Home
