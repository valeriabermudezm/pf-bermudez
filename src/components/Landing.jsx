import React from 'react'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Inicio from './Inicio/Inicio'
import Footer from './Footer/Footer';
import Blog from './Blog/Blog';
import ItemDetailContainer from './ItemListContainer/ItemDetailContainer';


const Landing = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Inicio />} ></Route>
          <Route exact path="/blog" element={<Blog />} ></Route>
          <Route exact path="/tienda" element={<ItemListContainer />} ></Route>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route exact path="/category/:categoria" element={<ItemListContainer />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Landing