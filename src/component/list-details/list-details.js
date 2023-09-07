import React, {useState,useEffect} from 'react';
import ListDisplayDetails from '../list/listDisplay';


const base_url = "https://node-ib9o.onrender.com/filter";

 const Listdetail = () => {
    const [Product, setProducts]=useState();

    useEffect(() => {
        let category_id = sessionStorage.getItem('category_id')
        let Cost = sessionStorage.getItem('event.target.value');
        let Price = Cost.split('-');
        let lowcost = Price[0];
        let highcost = Price[1];
        console.log(highcost);
        console.log(lowcost);
        let PriceUrl = "";
        if(Cost === highcost&&lowcost){
            PriceUrl = `${base_url}/${category_id}`
        }else{
            PriceUrl = `${base_url}/${category_id}?lowcost=${lowcost}&highcost=${highcost}`
        }
        fetch(PriceUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
            console.log(data);
        });
    })

    return(
        <>
        <div className='body'>
        <ListDisplayDetails listData={Product} id="list"/>
        </div>
        </>
    )
}




export default Listdetail

