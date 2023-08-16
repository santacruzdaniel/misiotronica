import { Outlet, Link } from 'react-router-dom';
import '../styles.css';



const Navbar = () => {

    const LinkStyles = {
display: 'flex',
textdecoration: 'none',
color: '#fff',
margin: '8px',
    }
        return (
        <>
            <div className='header-container'>
                        <Link to={"*"} style={LinkStyles}>
                        <img src={require('../img/letra-m.png')} alt="logo M" />
                        <h1>MisioTrónica Shop</h1></Link>
                    <nav className='nav-container'>
                        <Link to={"/"} style={LinkStyles} >INICIO</Link>
                        <Link to={"/ventas"} style={LinkStyles} >VENTAS</Link>
                        <Link to={"/sobreNosotros"} style={LinkStyles} >SOBRE NOSOTROS</Link>
                        <Link to={"/contacto"}style={LinkStyles} >CONTACTO</Link>
                    </nav>
            </div>

            <Outlet />
        </>
    )
};

export default Navbar;