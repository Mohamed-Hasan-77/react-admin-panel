import './menu.scss'
import { Link } from 'react-router-dom';
import { menu } from '../../Data'

export default function Menu() {
    return (
        <div className="menus">

            <div className="container">

                {menu.map((item) => {
                    return <div key={item.id} className="menuItem">
                        <span className='menuItemTitle' > {item.title.toUpperCase()}</span>
                        {item.listItems.map(listItem => {
                            return <>
                                <Link key={listItem.id} className='menuLink' to={listItem.url}>
                                    {/* <img className=' w-16' src={listItem.icon} alt="home icon" /> */}
                                    <i className={`fa-solid fa-${listItem.icon} text-white`}></i>
                                    <span className='listItemTitle'> {listItem.title} </span>
                                </Link>

                            </>
                        })}
                    </div>

                })}




            </div>
        </div>
    )
}
