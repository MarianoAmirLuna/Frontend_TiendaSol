import { Outlet } from "react-router";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

const Layout = () => {
    return(
        <>
          <Header></Header>
          <Navbar></Navbar>
          <Outlet />
        </>
    )
}

export default Layout;