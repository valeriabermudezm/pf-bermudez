import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-color">
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
            </nav>




            {/* Intento Navbar */}
{/* 
            <nav class="navbar navbar-expand-lg navbar-color">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={process.env.PUBLIC_URL + 'valarte_crochet_logo.svg'} className='logoNavbar' alt="Logo Valarte Crochet" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={'/'}> Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/blog'}> Blog</Link>

                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tienda
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                    <li><a class="dropdown-item" href="#">Bufandas</a></li>
                                    <li><a class="dropdown-item" href="#">Gorros</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget />
            </nav> */}

{/* Otro intento de Navbar fallido 

<Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}


        </>
    )
}

export default Navbar