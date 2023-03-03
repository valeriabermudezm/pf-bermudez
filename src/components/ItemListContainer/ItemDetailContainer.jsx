import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getList from '../../utils/getProducts';


const ItemDetailContainer = () => {

    const { id } = useParams();
    // console.log({id})
    // const [producto, setProducto] = useState(null);

    // useEffect(() => {
    //     fetch(`productos.json${id}`)
    //         .then(response => response.json)
    //         .then(dataJson => setProducto(dataJson))
    //         .finally()

    // }, [id])



    // useEffect(() => {
    //     getList()
    //         .then(getList.find(producto => producto.id == id))
    //         .catch((err) => console.log(err))
    //         .finally()

    // }, [id])

    // resolve(getList.find(producto => producto.id == id))




    return (
        <div>ItemDetailContainer</div>
    )
}

export default ItemDetailContainer



