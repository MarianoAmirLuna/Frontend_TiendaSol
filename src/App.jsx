
import './App.css'
import ProductDetailPage from './components/productDetailPage/productDetailPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx'
import Layout from './pages/layout/layout.jsx'
import CheckOut from './pages/checkout/checkout.jsx'
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24044e'
    }
  }
});


function App() {

  const [carrito, setCarrito] = useState([]);

  const actualizarCarrito = (hotel) => {
    setCarrito([...carrito, hotel]);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout carrito={carrito} />}>

            {/* La Home se renderiza solo en la raíz */}
            <Route index element={<Home />} />

            {/* El detalle se renderiza en su propia ruta, fuera de Home */}
            <Route path="/productos/:id" element={<ProductDetailPage carrito={carrito} actualizarCarrito={actualizarCarrito} />} />

            {/*  */}
            <Route path="/checkout" element={<CheckOut carrito={carrito} limpiarCarrito={limpiarCarrito} />} />

            {/* Opcional: una ruta por si el usuario escribe cualquier cosa mal */}
            <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
