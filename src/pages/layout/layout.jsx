import { Outlet } from "react-router";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

const Layout = ({carrito}) => {
    return(
        <>
          <Header></Header>
          <Navbar carrito={carrito}></Navbar>
          <Outlet />
        </>
    )
}

export default Layout;