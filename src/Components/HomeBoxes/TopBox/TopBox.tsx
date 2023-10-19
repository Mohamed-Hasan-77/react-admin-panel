import './topBox.scss';
import { topDealUsers } from '../../../Data'


export default function TopBox() {
    return (
        <div className='topBox'>
            <h1> Top Deals </h1>
            <div className="dealsList">
                {topDealUsers.map((user) => {
                    return <div key={user.id} className="userDeal">
                        <div className="userData">
                            <img src={user.img} alt="" />
                            <div className="nameEmail">
                                <p>{user.username}</p>
                                <p> {user.email} </p>
                            </div>
                        </div>
                        <p className='amount'> {user.amount} </p>
                    </div>
                })}
            </div>
        </div>
    )
}
