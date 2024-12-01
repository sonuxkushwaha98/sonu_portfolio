import React, { useState, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
let Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [visible, setvisible] = useState(true)
    const [pending, setpending] = useState(false)
    const form = useRef();
    const navigate = useNavigate();
    const collectdata = async (e) => {
        e.preventDefault();
        console.log(name, email, password);
        let result = await fetch("https://portfolio-backend-6of6.onrender.com/register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json()
        console.log(result)
        localStorage.setItem("user", JSON.stringify(result));
        setpending(true)
        if (result) {
            navigate("/")
            setpending(false)
            alert("Sign up successfully")
        }

    }
    return (
        <>

            <div className="signup">
                <h2>Sign up page</h2>
                <form ref={form} onSubmit={collectdata}>
                    <label>Name</label>
                    <input className="inputbox" type="text" required placeholder="Enter your name" value={name}
                        onChange={(e) => { setname(e.target.value) }} />
                    <label>Email</label>
                    <input className="inputbox" type="text" required placeholder="Enter your email" value={email}
                        onChange={(e) => { setemail(e.target.value) }} />
                    <label>Create password</label>
                    <div className="password-input">
                        <input className="passwordbox" type={visible?"password":"text"} required placeholder="Create your password" value={password}
                            onChange={(e) => { setpassword(e.target.value) }} />
                        <div className="eyebtn" onClick={() => { setvisible(!visible) }}>
                            {visible ? <IoMdEye /> : <IoMdEyeOff />}
                        </div>
                    </div>

                    {/* <button type="submit" disabled={pending?true:false} className="inputBtn" onClick={collectdata}>{pending?"Loading...":"Sign up"}</button> */}
                    <button type="submit" disabled={pending ? true : false} className="inputBtn" >{pending ? alert("Loading") : "Sign up"}</button>
                    <p>If allready Sign Up then <Link to='/login' >Login</Link></p>
                </form>
            </div>
        </>
    )
}
export default Signup;