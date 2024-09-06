import React, { useState,useRef } from "react";
import {Link, useNavigate} from 'react-router-dom'
let Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const form = useRef();
    const navigate = useNavigate();
    const collectdata = async (e) => {
        e.preventDefault();
        console.log(name, email, password);
        let result = await fetch("https://portfolio-backend-phi-seven.vercel.app//register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json()
        console.log(result)
        localStorage.setItem("user",JSON.stringify(result));
      if(result){
        navigate("/")
      }
    }
    return (
        <>

            <div className="signup">
                <h2>Sign up page</h2>
                <form ref={form}>
                    <label>Name</label>
                    <input className="inputbox" type="text" required placeholder="Enter your name" value={name}
                        onChange={(e) => { setname(e.target.value) }} />
                    <label>Email</label>
                    <input className="inputbox" type="text" required placeholder="Enter your email" value={email}
                        onChange={(e) => { setemail(e.target.value) }} />
                    <label>Create password</label>
                    <input className="inputbox" type="password" required placeholder="Create your password" value={password}
                        onChange={(e) => { setpassword(e.target.value) }} />
                    <button type="submit" className="inputBtn" onClick={collectdata}>Sign Up</button>
                    <p>If allready Sign Up then <Link to='/login' >Login</Link></p>
                </form>
            </div>
        </>
    )
}
export default Signup;