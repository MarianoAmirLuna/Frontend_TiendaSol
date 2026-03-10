import './productDetailPage.css'
import productos from '../mockProductos/productos';
import { useParams } from "react-router-dom";

function ProductDetailPage() {
    const { id } = useParams();
    const producto = productos.find(p => p._id === id);

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
                        <div className="product-precio">$ {producto.precio?.toLocaleString()}</div>
                        <div className="price-details">Impuestos incluidos</div>
                    </div>
                </div>
                <div className="agregar-carrito-container">
                    <button className="agregar-carrito">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );

}

export default ProductDetailPage;