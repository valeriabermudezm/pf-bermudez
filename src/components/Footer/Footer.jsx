import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-footer grid">
    <div className="row">
    <div className="col">
        <img src={process.env.PUBLIC_URL + 'valarte_crochet_logo.svg'} alt="Logo Valarte Crochet footer"
            className="logo-footer"/>
    </div>
    <div className="contact-footer col">
        <h3>CONTÁCTANOS</h3>
        <p className="margin_text_footer">
            Calle 1 #23-35
            Chapinero
            Bogotá, Colombia
        </p>
        <h3>
            <strong>EMAIL</strong>
        </h3>
        <p className="margin_text_footer_mail">
            <a href="#" className='correof'>valartecroch@gmail.com</a>
        </p>
    </div>
    <div className="sobremi-footer col">
        <h3>SOBRE NOSOTROS</h3>
        <p className="margin_text_footer">
            En <strong>VALARTE CROCHET</strong> creamos diseños totalmente hechos a mano, cómodos y divertidos, para que usar una prenda <strong>VALARTE</strong> sea toda una experiencia.
        </p>
    </div>
    <div className="redes col">
        {/* <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square"></i></a> */}
        <p>© 2023 VALARTE CROCHET</p>
    </div>
</div>
</footer>
  )
}

export default Footer