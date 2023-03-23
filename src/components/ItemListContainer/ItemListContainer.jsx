import React, { useEffect, useState } from 'react';
import getList from '../../utils/getProducts'
import ItemList from './ItemList';

const ItemListContainer = () => {

  const [arrayList, setArrayList] = useState([]);

  useEffect(() => {
    getList()
      .then((response) => setArrayList(response))
      .catch((err) => console.log(err))
      .finally()
  }, [])

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
  //   fetch('productos.json')
  //     .then((res) => res.json())
  //     .then((dataJson) => setArrayList(dataJson))
  //     .catch((err) => console.log(err))
  //     .finally()
  // }, [])