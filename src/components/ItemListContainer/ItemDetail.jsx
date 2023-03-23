import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
  return (
    <div className='contItemDetail'>
      <img src={producto.imagen} className='imgItemDetail' alt={producto.nombre} />
      <div className='contTextItemDet'>
        <h1 className='titleItemDetail'>Detalles de: {producto.nombre}</h1>
        <p className='textItem'> {producto.descripcion}</p>
        <div className='contPrecItem'>
        <p className='titleItemDetail precItem'> Precio: ${producto.precio}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail