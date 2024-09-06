import React, {  useState } from "react";
import{useNavigate,Link} from 'react-router-dom'

let Login=()=>{
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const navigate = useNavigate();
   
    const handelLogin= async()=>{
        console.log(email,password);
        let result = await fetch(['https://portfolio-backend-00ma.onrender.com/login',"https://localhost8000/login"], {
            method: "post",
            body: JSON.stringify({  email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json()
        console.log ( result)
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result))
          navigate('/')
        }else{
            alert('Please enter correct details')
        }
    }
    return(
        <>
        <div className="login">
        <div className="logincontainer">
            <input className="inputbox" type="email" placeholder="Enter Email" required 
            onChange={(e)=>{setemail(e.target.value)}} value={email} />
            <input className="inputbox" type="password" placeholder="Enter Password" required 
            onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
            <button className="inputBtn"  onClick={handelLogin}>Login</button>
            <p>New user then <Link to='/signup' >Sign Up</Link></p>
        </div>
        </div>
        </>
    )}

    export default Login;