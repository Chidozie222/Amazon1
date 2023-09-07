import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const base_url = "https://node-ib9o.onrender.com";


const SearchDetail = () => {
    let navigate = useNavigate()
    let [SearchData, setSearchData] = useState('');


    useEffect(() => {
        let data = sessionStorage.getItem('Search')
        let Data = data.charAt(0).toUpperCase()+data.slice(1).toLowerCase()
        console.log(Data);
        
        axios.get(`${base_url}/product_name?product_name=${Data}`)
        .then((res)=> {setSearchData(res.data)
            console.log(res.data);;})
    })

   

    const renderDetail = (data) => {
        if(data){
        if(data.length > 0){
            return data.map((item) => {
                const Proceed = () => {
                    navigate(`/placeOrder/${item.category}`)
                }
                const back = () => {
                    navigate(`/`)
                }
                return(
                    <>
                    <div className='home1'>
                    <div className='title'>
                        <img src={item.Image} alt={item.product_name} id='pics'/>
                    </div>
                    <div className='content'>
                        <h1>{item.product_name}</h1>
                        <h2>{item.category}</h2>
                        <p>$ {item.Price}</p>
                    </div>
                    </div>
                    <hr/>
             <div className="col-md-12">
                <button className="btn btn-danger"
                onClick={back}>Back</button>
                <button className="btn btn-success"
                onClick={Proceed}>Proceed</button>
            </div>
                    </>
                )
            })
        } else {
            <h1>Out Of stock</h1>
        }
    }
    }

    return(
        <>
        {renderDetail(SearchData)}
         </>
    )
} 


export default SearchDetail
