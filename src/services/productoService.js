import productos from "../components/mockProductos/productos.js";

export function getProductosSlowly() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(productos);
        }, 3000);
    });
}