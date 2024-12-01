import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { IoMdEye, IoMdEyeOff } from "react-icons/io"

let Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [pending, setpending] = useState(false)
    const [visible, setvisible] = useState(true)
    const navigate = useNavigate();

    const handelLogin = async () => {
        console.log(email, password);
        let result = await fetch('https://portfolio-backend-6of6.onrender.com/login', {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json()
        console.log(result)
        setpending(true)
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            setpending(false)
            alert("loging in please wait")
        } else {
            alert('Please enter correct details')
        }
    }
    return (
        <>
            <div className="login">
                <div className="logincontainer">
                    <input className="inputbox" type="email" placeholder="Enter Email" required
                        onChange={(e) => { setemail(e.target.value) }} value={email} />
                    <div className="password-input">
                        <input className="passwordbox" type={visible?"password":"text"} required placeholder="Enter your password" value={password}
                            onChange={(e) => { setpassword(e.target.value) }} />
                        <div className="eyebtn" onClick={() => { setvisible(!visible) }}>
                            {visible ? <IoMdEye /> : <IoMdEyeOff />}
                        </div>
                    </div>
                    <button className="inputBtn"  onClick={handelLogin}>{pending ? "Loading..." : "Log in"}</button>
                    <p>New user then <Link to='/signup' >Sign Up</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login;