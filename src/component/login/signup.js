import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';


const SignUp = () => {
 

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [Oname, setOname] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [Dob, setDob] = useState("");
    const [Address, setAddress] = useState("");
    const [Phone, setPhone] = useState("");

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(fname, email, password, Phone);
        fetch("https://node-ib9o.onrender.com/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            fname,
            lname,
            Oname,
            email,
            Phone,
            Dob,
            Address,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status === "ok") {
              alert("Registration Successful");
              navigate("/login");
            } else {
              alert("Something went wrong");
            }
          });
    }
  
    

    return(
        <>
            <div className="container">
                <hr/>
                <div className="panel panel-primary" id='panel'>
                    <div className="panel-heading">
                        <center><h1>SIGN UP</h1></center>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={handleSubmit}>
                            <div className="sign-body">
                            <div className="sign">
                                <label for="fname" className="control-label">First Name</label>
                                <input className="form-control" id="name"
                                name="name" placeholder='Name' onChange={(e) => setfname(e.target.value)}/>
                            </div>
                            <div className="sign">
                                <label for="lname" className="control-label">Last Name</label>
                                <input className="form-control" id="name"
                                name="name" placeholder='Name' onChange={(e) => setlname(e.target.value)}/>
                            </div>
                            <div className="sign">
                                <label for="Oname" className="control-label">Other Name</label>
                                <input className="form-control" id="name"
                                name="name" placeholder='Name' onChange={(e) => setOname(e.target.value)}/>
                            </div>
                            <div className="sign">
                                <label for="email" className="control-label">Email</label>
                                <input className="form-control" id="email"
                                name="email" placeholder='Email' type='email' onChange={(e) => setemail(e.target.value)}/>
                            </div>
                            <div className="sign">
                                <label for="email" className="control-label">Phone</label>
                                <input className="form-control" id="phone"
                                name="phone" placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div className="sign">
                                <label for="DOB" className="control-label">DOB</label>
                                <input className="form-control" id="DOB"
                                name="DOB" placeholder='Date of Birth' type='Date' onChange={(e) => setDob(e.target.value)}/>
                            </div>
                            <div className="sign">
                                <label for="email" className="control-label">Address</label>
                                <input className="form-control" id="phone"
                                name="phone" placeholder='Phone' onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className="sign">
                                <label for="password" className="control-label">password</label>
                                <input className="form-control" id="password" type='password'
                                name="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            
                        </div>
                        <button className='btn btn-success'>
                                Signup
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SignUp