import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pending, setPending] = useState(false);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setPending(true); // Start loading process
        try {
            const response = await fetch("https://portfolio-backend-6of6.onrender.com/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Invalid login credentials. Please try again.");
            }

            localStorage.setItem("user", JSON.stringify(result));
            alert("Logged in successfully!");
            navigate("/");
        } catch (error) {
            alert(error.message || "An error occurred during login.");
        } finally {
            setPending(false); // Stop loading process
        }
    };

    return (
        <div className="login">
            <div className="logincontainer">
                <h2>Login</h2>
                {pending && <p className="loading-message">Logging in, please wait...</p>}
                <input
                    className="inputbox"
                    type="email"
                    placeholder="Enter Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <div className="password-input">
                    <input
                        className="passwordbox"
                        type={visible ? "text" : "password"}
                        required
                        placeholder="Enter your password"
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
                    className="inputBtn"
                    onClick={handleLogin}
                    disabled={pending}
                >
                    {pending ? "Loading..." : "Log in"}
                </button>
                <p>
                    New user? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
