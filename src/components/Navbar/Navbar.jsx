import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
// import ItemList from '../ItemListContainer/ItemList'
// import Item from '../ItemListContainer/Item'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {



    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-color">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link to={'/'} className="navbar-brand"> <img src={process.env.PUBLIC_URL + 'valarte_crochet_logo.svg'} className='logoNavbar' alt="Logo Valarte Crochet" /></Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to={'/'}> Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/blog'}> Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/tienda'}> Tienda</Link>
                        </li>

                    </ul>
                </div>
                <CartWidget />
            </nav> */}




            {/* Intento Navbar */}

            <nav className="navbar navbar-expand-lg navbar-color">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand"> <img src={process.env.PUBLIC_URL + 'valarte_crochet_logo.svg'} className='logoNavbar' alt="Logo Valarte Crochet" /></Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/'}> Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/blog'}> Blog</Link>

                            </li>
                            <li className="nav-item dropdown">
                                <Link to={'/tienda'} className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Tienda</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/item/:sweaters'} className="dropdown-item"> Sweaters</Link></li>
                                    <li><Link to={'/item/:bufandas'} className="dropdown-item"> Bufandas</Link></li>
                                    <li><Link to={'/item/:gorros'} className="dropdown-item"> Gorros</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </>
    )
}

export default Navbar