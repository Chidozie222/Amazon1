import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './detail.css';
import { useNavigate, useParams } from 'react-router-dom';

const base_url = "https://node-ib9o.onrender.com";


const Detail = () => {
    let params = useParams()
    let navigate = useNavigate()
    const [Details, setDetail] = useState('')
    const [quantity, setQuantity] = useState(1)
    let id = params.id;


    useEffect(() => {
        axios.get(`${base_url}/detail/${id}`)

        .then((res)=> {
            setDetail(res.data)
        })
    })
    const incQty = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
      };
      
      const decQty = () => {
        if (quantity > 1) {
          const newQuantity = quantity - 1;
          setQuantity(newQuantity);
        }
      };

   

    const renderDetail = (data) => {
        sessionStorage.setItem('data', data)
        if(data){
            return data.map((item) => {
                const Proceed = () => {
                    navigate(`/placeOrder/${item.category}`)
                }
                const back = () => {
                    navigate(`/list/${item.category_id}`)
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
                        <p>$ {item.Price*quantity}</p>
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
            <h1>Issues Getting Data</h1>
        }
    }

    return(
        <>
        {renderDetail(Details)}
        <div className="count ">
                      <button onClick={decQty} className="btn border-secondary-subtle border-3  m-3  rounded-circle">-</button>
                     {quantity}
                     <button onClick={incQty} className="btn border-secondary-subtle border-3 m-3 rounded-circle "> + </button>
                        
                      </div>
         </>
    )
} 


export default Detail
