
import './App.css'
import ProductDetailPage from './components/productDetailPage/productDetailPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx'
import Layout from './pages/layout/layout.jsx'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24044e'
    }
  }
});


function App() {

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App
