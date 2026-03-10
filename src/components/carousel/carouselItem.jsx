import "./carouselItem.css";
import "../../index.css"
import { Link } from "react-router-dom";   

const CarouselItem = ({p}) => {
  return (
    <div key={p._id} className="carousel-card">
      <div className="product-card">
        <img
          src={p.fotos[0]}
          alt={p.nombre}
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-name">{p.nombre}</h3>
          <div className="product-details">
            <span className="product-price">
              ${p.precio.toLocaleString("es-AR")}
            </span>
          </div>
          <div className="ver-detalles-container">
            <span className="ver-detalles">
              <Link to={`/productos/${p._id}`} className="link-no-style">Ver Detalles</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem