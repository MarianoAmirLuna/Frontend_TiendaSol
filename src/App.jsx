
import './App.css'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import ProductoCarousel from './components/carousel/productoCarousel'
import AcomodationSearchBar from './components/acomodationSearchBar/acomodationSearchBar'
import ProductDetailPage from './components/productDetailPage/productDetailPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx'
import Layout from './pages/layout/layout.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* La Home se renderiza solo en la raíz */}
          <Route index element={<Home />} />

          {/* El detalle se renderiza en su propia ruta, fuera de Home */}
          <Route path="/productos/:id" element={<ProductDetailPage />} />

          {/* Opcional: una ruta por si el usuario escribe cualquier cosa mal */}
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
