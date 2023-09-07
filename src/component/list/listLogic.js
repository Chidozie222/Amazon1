import React, {useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import ListDisplay from './listDisplay';
import axios from 'axios';
import './list.css';
import Costfilter from '../filter/costFilter';


const base_url = "https://node-ib9o.onrender.com";

 const List = () => {
    let params = useParams();
    const [Product, setProducts]=useState();
    let category_id = params.category_id;

    useEffect(() => {

        sessionStorage.setItem('category_id',category_id)
        axios.get(`${base_url}/product?category_id=${category_id}`)

        .then((res)=> {
            setProducts(res.data)
        })
    })

    return(
        <>
        <div className='body'>
        <div id="filter">
                <Costfilter category_id={category_id}/>
        </div>
        <ListDisplay listData={Product} id="list"/>
        </div>
        </>
    )
}




export default List

