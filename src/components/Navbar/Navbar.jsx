import CartWidget from "./CartWidget/CartWidget";
import "./Navbar.css"
const Navbar = () => {
return (
    <nav className="Navbar">
    <div className="Navbar-logo">
        <p>Drinks</p>
    </div>

    <div className="Navbar-links">
        <ul>
        <li>
            <a href="#">INICIO</a>
            </li>
        <li>
        <a href="#">PRODCUCTOS</a>
            </li>
        <li>
        <a href="#">SUCURSALES</a>
            </li>
        <li>
            <a href="#">NOSOTROS</a>
            </li>
        <li>
        <a href="#">CONTACTO</a>
            </li>
        </ul>
    </div>
    <CartWidget/>

    </nav>
)
}

export default Navbar;
