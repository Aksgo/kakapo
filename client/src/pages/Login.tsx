import React, { useState } from "react";
import api from "../api";
const Login:React.FC = (e)=>{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const loginUser = async ()=>{
        try{
            const response = await api.post("http://127.0.0.1:5000/login",{
                email:email,
                password:password
            });
            window.location.href = "/";
        }catch(e : any){
            if(e.response.status == 401){
                alert("Invalid Credential");
                setEmail("");
                setPassword("");
            }
        }
    };
    return (
        <div className="login-container text-white text-lg m-3">
            <h2 className="mb-3">Login to your Account</h2>
            <form action="" className="login-form flex flex-col gap-2">
                <label>Email : </label>
                <input type="text" className="login-email bg-gray-700 p-2" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label>Password: </label>
                <input type="password" 
                className="login-pass bg-gray-700 p-2" 
                value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="button" onClick={()=>loginUser()}>Submit</button>
            </form>
        </div>
    );
};
 
export default Login;