import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import getList from '../../utils/getProducts'
import ItemList from './ItemList';
import {getList, getProductsByCategory} from '../../utils/getProducts'

const ItemListContainer = () => {

  const [arrayList, setArrayList] = useState([]);
  const {categoria} = useParams();


  useEffect(() => {
  if (categoria) {
      getProductsByCategory(categoria)
      .then((res) =>setArrayList(res))
  }else{
      getList()
      .then((res) => setArrayList(res))
  }
  }, [categoria])

  return (
    <>
      <div className='itemList'>
        <ItemList products={arrayList} />
      </div>
    </>
  )
}
export default ItemListContainer









  // useEffect(() => {
  //   getList()
  //     .then((response) => setArrayList(response))
  //     .catch((err) => console.log(err))
  //     .finally()
  // }, [])







  // useEffect(() => {
  //   fetch('productos.json')
  //     .then((res) => res.json())
  //     .then((dataJson) => setArrayList(dataJson))
  //     .catch((err) => console.log(err))
  //     .finally()
  // }, [])