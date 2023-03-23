import React from 'react'
import CategoriesContainer from './CategoriesContainer'
import getList from '../../utils/getProducts';
import { Link } from 'react-router-dom'
import Item from '../ItemListContainer/Item';



const Categories = ({ products }) => {

    return (
    <div>
    {products.map((product) => <CategoriesContainer key={product.categoria} product={product}/>)}
    </div>
  )
}

export default Categories