import React from "react";
import { useNavigate } from "react-router-dom";
import './filter.css';

//https://node-ib9o.onrender.com
const base_url = "https://node-ib9o.onrender.com/filter";

const Costfilter = (props) => {
    let navigate = useNavigate();


    const handleFilter = (event) => {
        let category_id = props.category_id;
        sessionStorage.setItem('category_id', category_id)
        let Price = (event.target.value).split('-');
        sessionStorage.setItem('event.target.value', event.target.value);
        let lowcost = Price[0];
        let highcost = Price[1];
        let PriceUrl = "";
        if(event.target.value === highcost&&lowcost){
            PriceUrl = `${base_url}/${category_id}`
        }else{
            PriceUrl = `${base_url}/${category_id}?lowcost=${lowcost}&highcost=${highcost}`
            navigate(`/list-details`);
        }
    }
    return(
        <>
            <center><h2>Price Range</h2></center>
            <div onChange={handleFilter}>
                <label className="radio">
                    <input type="radio" name="Price" value=""/>All
                </label>
                <label className="radio">
                    <input type="radio" name="Price" value="0-2000"/>0-2000
                </label>
                <label className="radio">
                    <input type="radio" name="Price" value="2001-4000"/>2001-4000
                </label>
                <label className="radio">
                    <input type="radio" name="Price" value="4001-5000"/>4001-5000
                </label>
                <label className="radio">
                    <input type="radio" name="Price" value="5001-7000"/>5001-7000
                </label>
                <label className="radio">
                    <input type="radio" name="Price" value="7001-10000"/>7001-10000
                </label>
            </div>
        </>
    )
}

export default Costfilter