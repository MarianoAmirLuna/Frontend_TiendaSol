import { FaCartShopping } from "react-icons/fa6";
import './navbar.css'
import { Link } from 'react-router';
import '../../index.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function Navbar({ carrito }) {

    const [cantProductosEnCarrito, setProductosEnCarrito] = useState(0);

    const irAChekout = () => {
        navigate("/checkout")
    }

    const totalProductos = () => {
        let suma = 0
        for (const producto of carrito) {
            suma += producto.cantidadCompras
        }
        return suma;
    }

    useEffect(() => {
        setProductosEnCarrito(totalProductos());
    }, [carrito]);

    const navigate = useNavigate();

    return (
        <header className='navbar-bg'>
            <nav className='navbar'>
                <div className='navbar-section-left'>
                    <button className='menu-icon'>☰</button>
                </div>

                <div className="navbar-section-center">
                    <div className="brand">
                        <Link to={`/`} className="link-no-style"><h1 className="brand-text"> Tienda sol </h1></Link>
                    </div>
                </div>

                <div className='navbar-section-right'>
                    <button className='cart' onClick={irAChekout}>
                        <FaCartShopping color="white" />
                        <span className="cart-count">{cantProductosEnCarrito}</span>
                    </button>
                </div>

            </nav>
        </header>
    )
}
export default Navbar