import { FaCartShopping } from "react-icons/fa6";
import './navbar.css'
import { Link } from 'react-router';

function Navbar() {
    return (
        <>
            <header className='navbar-bg'>
                <nav className='navbar'>
                    <div className='navbar-section left'>
                        <button className='menu-icon'>☰</button>
                    </div>

                    <div className="navbar-section center">
                        <div className="brand">
                            <Link to={`/`} className="link-no-style"><h1 className="brand-text"> Tienda sol </h1></Link>
                        </div>
                    </div>

                    <div className='navbar-section right'>
                        <button className='cart'>
                            <FaCartShopping color="white" />
                            <span className="cart-count">0</span>
                        </button>
                    </div>

                </nav>
            </header>
        </>
    )
}
export default Navbar