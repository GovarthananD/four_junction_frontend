import React, { useState } from "react";
import imdb from "../assets/imdb.png";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({ name: "", mobile: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://four-junction-backend.onrender.com/register', form);
            alert('User registered successfully');
            navigate('/login'); // or wherever your login route is
        } catch (err) {
            alert(err.response?.data?.error || 'Registration failed');
        }
    };
    return (<>
        <div className="container">
            <div className="d-flex container align-items-center justify-content-center height-100vh">
                <div className="d-flex flex-column align-items-center">
                    <img src={imdb} alt="Logo" width="70" height="70" class="d-inline-block align-text-top" />
                    <form className="bot" onSubmit={handleSubmit}>
                        <p className="fs-2">Create Account</p>

                        <div class="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Mobile</label>
                            <input
                                type="text"
                                className="form-control"
                                name="mobile"
                                value={form.mobile}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" class="btn btn-warning text-dark w-100">Create Your IMDb Account</button>
                        <p className="mt-2">
                            Already have an account?</p>
                        <button class="btn btn-warning text-dark w-100" onClick={() => navigate("/login")}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default Register;