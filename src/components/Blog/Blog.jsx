import React from 'react'
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div class="titulo-de-seccion">
                <h2 class="titulo-blog">Blog</h2>
            </div>

            <div class="container text-center">
                <div class="row row-cols row-cols-sm-1 row-cols-md-2">
                    <div class="col-">
                        <img src={process.env.PUBLIC_URL + 'bullion.jpeg'} alt="Valeria Bermudez foto" class="sobremi-img" />
                    </div>
                    <div class="col- blog-texto">
                        <h4>Crochet Bullion</h4>
                            <p>Aunque este tipo de crochet no es sencillo de realizar, los resultados que puedes obtener con él son magníficos. El Bullion consiste en enredar tu estambre alrededor de un gancho formando una figura “enrollada” con la que puedes hacer tu siguiente punto. Varios puntos en este estilo terminarán dándote figuras muy interesantes que puedes utilizar para decorar cojines, por ejemplo.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog