import React, { useState, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [pending, setPending] = useState(false);
    const form = useRef();
    const navigate = useNavigate();

    const collectData = async (e) => {
        e.preventDefault();
        setPending(true); // Start the loading process
        try {
            const response = await fetch("https://portfolio-backend-6of6.onrender.com/register", {
                method: "POST",
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Sign-up failed. Please try again.");
            }

            localStorage.setItem("user", JSON.stringify(result));
            alert("Sign up successfully!");
            navigate("/");
        } catch (error) {
            alert(error.message || "An error occurred during sign-up.");
        } finally {
            setPending(false); // Stop the loading process
        }
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            {pending && <p className="loading-message">Processing your request, please wait...</p>}
            <form ref={form} onSubmit={collectData}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    className="inputbox"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    className="inputbox"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Create Password</label>
                <div className="password-input">
                    <input
                        id="password"
                        className="passwordbox"
                        type={visible ? "text" : "password"}
                        required
                        placeholder="Create your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                        className="eyebtn"
                        onClick={() => setVisible(!visible)}
                        aria-label={visible ? "Hide password" : "Show password"}
                    >
                        {visible ? <IoMdEyeOff /> : <IoMdEye />}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={pending}
                    className="inputBtn"
                >
                    {pending ? "Loading..." : "Sign up"}
                </button>
                <p>
                    Already signed up? <Link to='/login'>Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
