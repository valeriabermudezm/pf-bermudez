import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getList from '../../utils/getProducts';
import Categories from './Categories';

const CategoriesContainer = () => {

    const [categoria, setCategoria] = useState({});
    const { categorias } = useParams();
   

    useEffect(() => {
        getList()
            .then(res => setCategoria(res.find((item)=> item.categoria)))
          

    }, [categoria])

    return (
        <div><Categories producto={categorias}/></div>
    )
}

// const CategoriesContainer = () => {

    // const [categorias, setCategorias] = useState({});

    // const { categoria } = useParams();

    // useEffect(() => {
    //     getList()
    //         .then(res => setCategorias(res.find((item) => item.categoria === parseInt(categoria))))
    //         .catch((err) => console.log(err))
    //         .finally()

    // }, [categorias])

//   return (

//     <div>CategoriesContainer</div>
//   )
// }

export default CategoriesContainer