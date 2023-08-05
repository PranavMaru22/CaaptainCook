import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";

const Login = () => {

    const [username ,setUsername] = useState();
    const [password ,setPassword] = useState();
    const navigate = useNavigate();
    const [_,setCookies] = useCookies(["access_token"])

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/auth/login",{
                username,
                password
            });
            setCookies("access_token",res.data.token);
            window.localStorage.setItem("userID",res.data.userID);
            navigate("/")
        } catch (error) {
            alert("Not able to login!!");
        }
    }
    
    return (
        <div className='flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 font-mono to-pink-500 text-white h-screen w-full'>
        <div className=' flex flex-col justify-between border shadow-2xl text-black border-white bg-white rounded-3xl h-3/6 w-3/12 px-3 py-3'>
            <div className=' px-2 text-2xl mb-3 font-semibold '>
                <h2>Login</h2>
            </div>
            <div className=' flex flex-col justify-start items-start h-full w-full'>
                <div className='flex flex-col px-2 w-full py-3 mt-1'>
                    <label htmlFor='username' className=' text-xl font-semibold '>
                        Username
                    </label>
                    <input id='username' type='text' className=' text-black ml-2 mt-3 px-5 font-semibold text-opacity-95 border-none outline-none py-2 rounded-full w-5/6' onChange={(e)=> setUsername(e.target.value)} placeholder='username' />
                </div>
                <div className='flex flex-col w-full px-4 py-3'>
                    <label htmlFor='password' className=' text-xl font-semibold '>
                        Password
                    </label>
                    <input id='password' onChange={(e)=> setPassword(e.target.value)} className='bg-black text-white text-opacity-80 ml-2 mt-3 px-5 border-none outline-none py-2 rounded-full w-5/6' type='password' placeholder='password' />
                </div>
            </div>
            <div className=' flex flex-col justify-center items-center'>
                <button onClick={handleLogin} className=' bg-black text-white py-2 mb-2 px-28 rounded-full text-lg font-semibold'>Login</button>
            </div>
        </div>
    </div>
)
}

export default Login