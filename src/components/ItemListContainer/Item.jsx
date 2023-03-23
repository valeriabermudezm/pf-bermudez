import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({ product }) => {
    console.log(product)
    return (

        <div className='card'>
            <img src={product.imagen} className='imgProd' alt="..." />
            <h5 className='nomProd'>{product.nombre}</h5>
            <p className='textProd'>Precio: ${product.precio}</p>
            <Link to={`/item/${product.id}`} className="detalles">Ver detalles</Link>
        </div>

    )
}

export default Item