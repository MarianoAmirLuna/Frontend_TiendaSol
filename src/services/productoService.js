import axios from "axios";
import productos from "../components/mockProductos/productos.js";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const PRODUCTOS_URL = `${API_BASE_URL}/productos`;

export function getProductosSlowly() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(productos);
        }, 3000);
    });
}

export async function getProductos(filtros = {}) {
    try{
        const response = await axios.get(`${PRODUCTOS_URL}`, {
            params: filtros, // <--- ESTO ES LA CLAVE
            headers: { 'Cache-Control': 'no-cache' }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching productos:", error);
        throw error;
    }
}

export async function getProductoById(id) {
    try {
        const response = await axios.get(`${PRODUCTOS_URL}/${id}`, {
            headers: { 'Cache-Control': 'no-cache' }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching producto with id ${id}:`, error);
        throw error;
    }
}

