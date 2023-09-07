import React, {useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import './login.css';


const Login = () => {

    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    
        console.log(email, password);
        fetch("https://node-ib9o.onrender.com/login-user", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status === "ok") {
              alert("login successful");
              sessionStorage.setItem("token", data.data);
              navigate("/")
            }
          });
      }

    return(
        <>
        <hr/>
         <div className="container">
                <div className="panel panel-warning" id="panel">
                    <div className="panel-heading">
                        <center><h1>Login</h1></center>
                    </div>
                    <div className="panel-body">
                       <form onSubmit={handleSubmit}>
                          <div className="log-body">
                            <div className="log">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="log">
                                <label for="email" className="control-label">Password</label>
                                <input className="form-control" id="password" type="password"
                                name="password"placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                      
                        <button className='btn btn-danger'>
                            Login
                        </button>
                        <Link to={`/signup`} style={{color:'blue'}}>
                            SignUp
                        </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login