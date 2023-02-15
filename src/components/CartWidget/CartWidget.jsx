import React from 'react'
import {BsCart3} from 'react-icons/bs';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <>
    <div className='contCarrito'>    
      <BsCart3 className='shopBtn'/>
      <p className='num-carrito'>8</p>
    </div>

    </>
  )
}

export default CartWidget