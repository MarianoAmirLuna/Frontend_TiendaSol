import './header.css'

function Header(props) {
    return (
        <header className="header">
            hola soy un header {props.nombre}
        </header>
    )
}
export default Header