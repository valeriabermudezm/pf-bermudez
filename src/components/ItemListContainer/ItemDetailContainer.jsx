import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getList from '../../utils/getProducts';
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getList()
            .then(res => setProducto(res.find((item) => item.id === parseInt(id))))
            .catch((err) => console.log(err))
            .finally()

    }, [id])

    return (
        <div><ItemDetail producto={producto}/></div>
    )
}

export default ItemDetailContainer


    // console.log({id})
    // const [producto, setProducto] = useState(null);

    // useEffect(() => {
    //     fetch(`productos.json${id}`)
    //         .then(response => response.json)
    //         .then(dataJson => setProducto(dataJson))
    //         .finally()

    // }, [id])


