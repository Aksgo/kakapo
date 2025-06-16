import React, { useEffect, useState } from "react";
import { User } from "../store/User";
import api from "../api";
import { Link } from "react-router-dom";
const Welcome: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    sessionStorage.clear();
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("http://127.0.0.1:5000/@me");
                setUser(response.data);
            } catch (e) {
                console.log("unauthorized");
            }
        }
        fetchUser();
    }, []);

    const logoutUser = async () => {
        if (user != null) {
            await api.post("http://127.0.0.1:5000/logout");
        }
        window.location.href = "/";
    };

    return (
    <div className=" min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center px-4">
            
  
            <header className=" mx-3 flex flex-row flex-wrap items-center text-5xl font-extrabold text-[#facc15] text-center pt-10 pb-6">
                <span>Kakapo</span>
                 <img
                src="/images/kakapo.png"
                alt="Kakapo bird illustration"
                className="opacity-80 w-[80px] pointer-events-none select-none  "
            />
            </header>

            {user != null ? (
                <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-md w-full max-w-md text-center space-y-4 border border-gray-700">
                    <p className="text-lg font-medium text-[#38bdf8]">Welcome, {user.email}</p>
                    <button
                        onClick={logoutUser}
                        className="bg-[#ef4444] hover:bg-[#dc2626] transition-colors px-4 py-2 rounded-lg font-medium tracking-wide"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg w-full max-w-md text-center border border-gray-700">
                    <span className="text-xl font-light italic text-gray-300">
                        "Where your ideas stay yours."
                    </span>
                    <div className="flex justify-center gap-4 mt-4">
                        <Link to="/login">
                            <button className="bg-[#334155] hover:bg-[#1e293b] transition-colors px-5 py-2 rounded-md text-white font-semibold">
                                Sign In
                            </button>
                        </Link>
                        <Link to ="/register">
                            <button className="bg-[#b38522] hover:bg-[#72561a] transition-colors px-5 py-2 rounded-md text-white font-semibold">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>


    );
};

export default Welcome;