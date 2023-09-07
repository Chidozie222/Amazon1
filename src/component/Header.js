import React, {useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

const base_url = "https://node-ib9o.onrender.com";


const Header = () => {
    let navigate = useNavigate();

    const [Category, setCategory]= useState('');
    const [userData, setUserData] = useState('');
    const [ProductText,setProductText] = useState('');


    let Search = ProductText

    const Product = () => {
        console.log(Search);
        sessionStorage.setItem('Search', Search)
        navigate(`/search`)
    }
    
    


    const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem("userInfo");
        setUserData('');
        navigate('/')
    }

    const Detail = (data) => {
        fetch("https://node-ib9o.onrender.com/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              token: sessionStorage.getItem("token"),
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              setUserData(data.data);
            });
            
            if (data){
                sessionStorage.setItem('userInfo',JSON.stringify(userData))
                if (data.fname) {
                    return(
                        <>
                            <div key={data._id} className="data">
                                <span>Hello,</span>{data.fname}
                            </div>
                            <button onClick={handleLogout} className='btn btn-outline-danger' id="button">
                                    Logout
                            </button>
                        </>
                    )
                }else{
                    return(
                        <>
                            <Link to={`/login`}>
                            <a class="nav-a" href="#">
                            <span>Hello. Sign in</span>
                            Accounts &amp; Lists
                            </a>
                            </Link>
                        </>
                    )
                }
            }else{
                return(
                    <>
                        <Link to={`/login`}>
                        <a class="nav-a" href="#">
                        <span>Hello. Sign in</span>
                        Accounts &amp; Lists
                        </a>
                        </Link>
                    </>
                )
            }
    }

    useEffect(() => {
        fetch(`${base_url}/category`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setCategory(data)
        });
    },[])


    const renderCategory = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item._id} value={item.id}>
                        {item.category}
                    </option>
                )
            })
        }
    }


    

    return(
        <> 
           <header>
        <div className="logo">
        <Link to={`/`}><a href="#" id="logo"></a></Link>
        </div>
         <div className="search">
            <form onSubmit={Product}>
                 <div className="search-select">
                     <select id="search-select">
                         <option>All</option>
                         {renderCategory(Category)}
                     </select>
                     <input type="text" id="text" onChange={(e)=> setProductText(e.target.value)}/>
                     <input type="submit" id="submit" value={''}/>
                 </div>
            </form>
         </div>
         <div className="nav">
                                <a href="#">
                                    En
                                </a>
                                {Detail(userData)}
                                <Link to={`/viewOrder`}>
                                <a href="#">
                                    <span>Returns</span>
                                    &amp; Orders
                                </a>
                                </Link>
                            <div className="cart">
                            <Link to={`/viewOrder`}>
                                <a href="#">
                                    <p id="cart"></p>
                                </a>
                                </Link>
                            </div>
                            <span id="cart-text">cart</span>
     </div>
     </header>
     <div class="navclass">
         <nav>
             <div class="left">
                 <a href="#" id="low">All</a>
                 <a href="#" id="low">Today's Deals</a>
                 <a href="#" id="low">customer service</a>
                 <a href="#" id="low">Registry</a>
                 <a href="#" id="low ">Gift Cards</a>
                 <a href="#" id="low">Sell</a>
             </div>
             <div className="right">
                 <a href="#" >Shop Deals in Electronics</a>
             </div>
         </nav>
        </div>
        <header/>

        </>
        )
}




export default Header