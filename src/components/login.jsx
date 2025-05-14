import { useState } from "react";
import imdb from "../assets/imdb.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErr("Please enter both email and password");
            return;
        }

        try {
            const payload = {
                email,
                password,
            };

            const response = await fetch('https://four-junction-backend.onrender.com/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok && data.token) {
                setErr("");
                localStorage.setItem("token", data.token);
                navigate("/main"); 
            } else {
                setErr(data.error || "Invalid credentials");
            }
        } catch (error) {
            console.error("Login failed:", error);
            setErr("An error occurred. Please try again.");
        }
    };


    return (<>
        <div className="container">
            <div className="d-flex container align-items-center justify-content-center height-100vh">
                <div className="d-flex flex-column align-items-center">
                    <img src={imdb} alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
                    {err ? <p className="text-danger">{err}</p> : ""}
                    <form className="bot" onSubmit={handleLogin}>
                        <p className="fs-2">Sign In</p>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                onChange={(event) => setEmail(event.target.value)} value={email}

                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                onChange={(event) => setPassword(event.target.value)} value={password}
                            />
                        </div>
                        <button type="submit" className="btn btn-warning text-dark w-100">Submit</button>
                        <p className="mt-2">New to IMDb?</p>
                        <button type="submit" className="btn btn-warning text-dark" onClick={() => navigate("/register")}>Create Your IMDb Account</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default Login;