import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'
import Navbar from '../NavBar/Navbar'
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div className='mainContainer'>
            <Navbar />
            <div className="mainSection">

                <div className="menu ">
                    <Menu />
                </div>

                <div className="content">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </div>
    )
}
