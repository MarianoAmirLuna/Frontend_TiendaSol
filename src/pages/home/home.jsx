import './home.css'
import ProductoCarousel from '../../components/carousel/productoCarousel'
import SearchBar from '../../components/searchBar/searchBar.jsx'
import { getProductosSlowly } from '../../services/productoService.js'
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Home() {

    {/* TODO: DESPUES ELIMINAR YA QUE LA LÓGICA DE FILTRADO ESTA EN EL BACKEND */ }
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    const filtrarProductos = (searchText) => {
        if (searchText.trim() === "") {
            setProductosFiltrados(productos); // Mostrar todos
        } else {
            // Filtrar desde datos originales
            const filtered = productos.filter(producto =>
                producto.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
                producto.descripcion.toLowerCase().includes(searchText.toLowerCase())
            );
            setProductosFiltrados(filtered);
        }
    }

    const cargarProductos = async () => {
        const productosCargados = await getProductosSlowly();
        setProductos(productosCargados);
        setProductosFiltrados(productosCargados);
    }

    {/* TODO: DESPUES ELIMINAR YA QUE LA LÓGICA DE FILTRADO ESTA EN EL BACKEND */ }

    useEffect(() => {
        cargarProductos()
    }, [])

    return (
        <>
            <div className='home-header'>
                <SearchBar filtrarProductos={filtrarProductos}></SearchBar>
            </div>

            {!productos.length ? (
                /* Mientras carga, mostramos el spinner centrado */
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
                    <CircularProgress size={60} color="secondary" /> 
                </div>
            ) : (
                <ProductoCarousel productos={productosFiltrados} />
            )}

        </>
    )
}
export default Home