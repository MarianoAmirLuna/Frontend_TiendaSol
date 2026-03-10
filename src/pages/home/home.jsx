import './home.css'
import Header from '../../components/header/header'
import Navbar from '../../components/navbar/navbar'
import AccomodationSearchBar from '../../components/acomodationSearchBar/acomodationSearchBar'
import ProductoCarousel from '../../components/carousel/productoCarousel'

function Home() {
    return (
        <>
            <AccomodationSearchBar></AccomodationSearchBar>
            <ProductoCarousel />
        </>
    )
}
export default Home