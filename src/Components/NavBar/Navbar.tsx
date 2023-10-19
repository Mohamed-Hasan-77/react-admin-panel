import './navbar.scss'


export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src='/logo.svg' alt="logo" />
                <span>Admin Panel</span>
            </div>

            <div className="icons">
                <img className='icon' src="/search.svg" alt="search" />
                <img className='icon' src="/app.svg" alt="app" />
                <img className='icon' src="/expand.svg" alt="expand" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img className='avatar' src="/noavatar.png" alt="" />
                    <span> User </span>
                </div>
                <img className='icon' src="/setting.svg" alt="" />
            </div>
        </nav>
    )
}
