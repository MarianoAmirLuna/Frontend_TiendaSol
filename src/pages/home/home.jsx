import './home.css'
import ProductoCarousel from '../../components/carousel/productoCarousel'
import SearchBar from '../../components/searchBar/searchBar.jsx'
import { getProductosSlowly, getProductos } from '../../services/productoService.js'
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Paginacion from '../../components/paginacion/paginacion.jsx';

function Home() {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    // 1. Centralizamos la lógica de carga para que acepte una página específica
    const cargarProductos = async (pagina) => {
        setLoading(true);
        try {
            const filtros = {
                page: pagina,
                limit: 6,
                sortOrder: "asc"
            };

            const respuesta = await getProductos(filtros);
            
            // IMPORTANTE: Si tu backend devuelve un objeto con metadata, 
            // asegúrate de extraer el array de productos correctamente aquí.
            // Si el backend devuelve DIRECTO el array, usamos 'respuesta'.
            const data = respuesta?.productos || respuesta || [];
            const total = respuesta?.totalPages || 5; // Valor temporal si el back no lo envía aún

            setProductos(data);
            setProductosFiltrados(data);
            setTotalPages(total);
        } catch (error) {
            console.error("Error en Tienda Sol:", error);
            setProductos([]);
        } finally {
            setLoading(false);
        }
    }

    // 2. Este efecto se dispara al inicio Y cada vez que currentPage cambie
    useEffect(() => {
        cargarProductos(currentPage);
    }, [currentPage]);

    const filtrarProductos = (searchText) => {
        if (searchText.trim() === "") {
            setProductosFiltrados(productos);
        } else {
            const filtered = productos.filter(p =>
                p.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
                p.descripcion.toLowerCase().includes(searchText.toLowerCase())
            );
            setProductosFiltrados(filtered);
        }
    }

    // 3. Manejador simple para la paginación
    const handlePageChange = (numeroPagina) => {
        setCurrentPage(numeroPagina); // Esto dispara el useEffect automáticamente
    }

    return (
        <>
            <div className='home-header'>
                <SearchBar filtrarProductos={filtrarProductos}></SearchBar>
            </div>

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
                    <CircularProgress size={60} color="secondary" />
                </div>
            ) : (
                <div>
                    <ProductoCarousel productos={productosFiltrados} />
                    
                    {/* Solo mostramos paginación si hay más de 1 página */}
                    {totalPages > 1 && (
                        <Paginacion
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            )}
        </>
    )
}
export default Home