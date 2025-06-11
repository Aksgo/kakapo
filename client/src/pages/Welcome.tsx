import React from "react";

const Welcome:React.FC = ()=>{
    return (
        <div className="text-white flex flex-col justify-items-center items-center">
            <div className="text-4xl font-bold text-white pt-10">Kakapo</div>
            <p>Not logged in</p>
            <a href="/login" className="login-link"><button className="login-btn">Login</button></a>
            <a href="/register" className="register-link"><button className="register-btn">Register</button></a>
        </div>
    );
};

export default Welcome;