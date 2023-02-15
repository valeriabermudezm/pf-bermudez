import React from 'react'
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'

const Landing = () => {
  return (
    <>
       <Navbar/> 
       <ItemListContainer greeting="¡Bienvenidos amantes del crochet a su tienda vitual favorita!"/>
    </>
  )
}

export default Landing