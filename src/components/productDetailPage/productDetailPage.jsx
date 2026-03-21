import './productDetailPage.css'
import productos from '../mockProductos/productos';
import { useParams } from "react-router-dom";
import { ButtonGroup, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getProductoById } from '../../services/productoService.js';

const conCompras = (cantidadCompras, producto) => ({ ...producto, cantidadCompras })

function ProductDetailPage({ carrito, actualizarCarrito }) {
    const navigate = useNavigate()
    const { id } = useParams();

    const [producto, setProducto] = useState(null);
    const [cantProductosEnCarrito, setProductosEnCarrito] = useState(0);

    const cargarProducto = async () => {
        try {
            const data = await getProductoById(id);
            setProducto(data);
        } catch (error) {
            console.error("Error al cargar el producto:", error);
            setProducto(null);
        }
    };

    useEffect(() => {
        setProductosEnCarrito(0);
        cargarProducto();
    }, [id, carrito]);

    const incrementarProductos = () => {
        const nuevosProductos = cantProductosEnCarrito + 1;
        setProductosEnCarrito(nuevosProductos);
    };

    const decrementarProductos = () => {
        if (cantProductosEnCarrito > 0) {
            const nuevosProductos = cantProductosEnCarrito - 1;
            setProductosEnCarrito(nuevosProductos);
        }
    };

    const agregar = () => {
        actualizarCarrito(conCompras(cantProductosEnCarrito, producto))
        navigate("/")
    }


    if (!producto) {
        return (
            <div className="product-detail-container">
                <div className="product-header">
                    <h1>Producto no encontrado</h1>
                    <p>Lo sentimos, no pudimos encontrar el producto que buscas.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="product-detail-container">
            <div className="product-header">
                <h1 className="product-nombre">{producto.nombre}</h1>
            </div>

            <div className="product-content">
                <div className="product-image-section">
                    <img
                        src={producto.fotos[0]}
                        alt={producto.nombre}
                        className="product-imagen"
                    />
                </div>

                <div className="product-info-section">
                    <div className="product-description">
                        {producto.descripcion}
                    </div>

                    <div className="product-price-section">
                        <div className="price-group">
                            <div className="product-precio">$ {producto.precio?.toLocaleString()}</div>
                            <div className="price-details">Impuestos incluidos</div>
                        </div>

                        <div className="product-solicitar-container">
                            <ButtonGroup variant="outlined" aria-label="outlined button group">
                                <Button onClick={decrementarProductos} disabled={cantProductosEnCarrito === 0}>-</Button>
                                <Button disabled>{cantProductosEnCarrito}</Button>
                                <Button onClick={incrementarProductos}>+</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className="agregar-carrito-container">

                    <button className="agregar-carrito" disabled={cantProductosEnCarrito === 0} onClick={agregar}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );

}

export default ProductDetailPage;