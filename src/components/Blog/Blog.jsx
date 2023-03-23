import React from 'react'
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="titulo-de-seccion">
                <h2 className="titulo-blog">Blog</h2>
            </div>

            <div className="containerBlog containerBlog1">
                <div className="row row-cols row-cols-sm-1 row-cols-md-2">
                    <div className="col- ">
                        <img src={process.env.PUBLIC_URL + 'ReinaVictoria-original.webp'} alt="Bullion foto" className="imgBlog"/>
                    </div>
                    <div className="col- blog-texto">
                        <h4 className='titutloArtBlog'>Algunos datos sobre la historia del crochet</h4>
                            <p>Las raíces de este tipo de tejido son poco claras: algunas investigaciones sugieren que la técnica podría haber derivado de la antigua labor de aguja china, mientras que otras afirman que se originó en Arabia o en tribus indígenas de Sudamérica, y que finalmente se extendió a los países mediterráneos. Sin embargo, sus inicios en la moda se destacaron en los años 60 y 70, cuando los tejidos a crochet se hicieron más refinados y fáciles de conseguir. Su actual resurgimiento se debe en gran medida a la pandemia.
                            </p>
                    </div>
                </div>
            </div>


            <div className="containerBlog">
                <div className="row row-cols row-cols-sm-1 row-cols-md-2">
                    <div className="col-">
                        <img src={process.env.PUBLIC_URL + 'bullion.jpeg'} alt="" className="imgBlog"/>
                    </div>
                    <div className="col- blog-texto">
                        <h4 className='titutloArtBlog'>Crochet Bullion</h4>
                            <p>Aunque este tipo de crochet no es sencillo de realizar, los resultados que puedes obtener con él son magníficos. El Bullion consiste en enredar tu estambre alrededor de un gancho formando una figura “enrollada” con la que puedes hacer tu siguiente punto. Varios puntos en este estilo terminarán dándote figuras muy interesantes que puedes utilizar para decorar cojines, por ejemplo.
                            </p>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Blog