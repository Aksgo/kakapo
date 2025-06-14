import React, { useState, useEffect } from "react";
import api from "../api";
import { User } from "../store/User";
import { Link } from "react-router-dom";
import './App.css'
const Login: React.FC = (e) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("http://127.0.0.1:5000/@me");
                window.location.href = "/dashboard";
            } catch (e) {
                console.log("unauthorized");
            }
        }
        fetchUser();
    }, []);


    const loginUser = async () => {
        try {
            const response = await api.post("http://127.0.0.1:5000/login", {
                email: email,
                password: password
            });
            window.location.href = "/dashboard";
        } catch (e: any) {
            if(e.response){
                if(e.response.status == 401){
                    alert("User Not Found");
                    setEmail("");
                    setPassword("");
                }else if(e.response.status == 500){
                    alert("500 Bad Gateway - we are working")
                }
            }else{
                alert("Invalid Information");
            }
        }
    };
    return (
        <div className="login-container rubik-f1 min-h-screen flex items-center justify-center bg-[#0b0b0d] px-4">
            <div className="w-full max-w-md bg-[#1a1a1e] p-8 rounded-xl shadow-xl border border-gray-800">
                <h2 className="mb-6 text-3xl font-semibold text-center text-white">
                    Welcome Back!
                </h2>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col text-left">
                        <label className="mb-1 text-sm text-gray-400">Email</label>
                        <input
                            type="email"
                            className="bg-[#2b2b30] text-white p-2 rounded outline-none focus:ring-2 focus:ring-yellow-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col text-left">
                        <label className="mb-1 text-sm text-gray-400">Password</label>
                        <input
                        type="password"className="bg-[#2b2b30] text-white p-2 rounded outline-none focus:ring-2 focus:ring-yellow-500" value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={loginUser}
                        className="bg-amber-700 hover:bg-amber-600 text-gray-200 font-semibold py-2 rounded-3xl mt-2 w-1/2 m-auto"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>

    );
};

export default Login;