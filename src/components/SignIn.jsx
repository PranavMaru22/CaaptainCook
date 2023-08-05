import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";

const SignIn = () => {

    const [username ,setUsername] = useState();
    const [email ,setEmail] = useState();
    const [password ,setPassword] = useState();
    const navigate = useNavigate();

    const [_,setCookie] = useCookies(["access_token"]);

    const handleSignIn = async(e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/api/auth/signin",{
                username,email,password
            })
            if(res.data==="user Already has an account."){
                window.alert("User already exists!!")
            }else{
                setCookie("access_token",res.data.token);
                window.localStorage.setItem("userID",res.data.userID);
                navigate("/");
            }
        } catch (error) {
            window.alert("Try again after sometime.");
        }
    }

    return (
        <div className='flex justify-center items-center bg-gradient-to-r from-violet-200 to-pink-200 bg-opacity-95 text-white h-screen w-full'>
            <div className=' flex flex-col justify-between border shadow-2xl text-black border-white bg-white rounded-3xl h-4/6 w-3/12 px-3 py-3'>
                <div className=' px-2 text-2xl mb-3 font-semibold '>
                    <h2>SignIn</h2>
                </div>
                <div className=' flex flex-col justify-start items-start h-full w-full'>
                    <div className='flex flex-col px-2 w-full py-3 mt-4'>
                        <label className=' text-xl font-semibold '>
                            Username
                        </label>
                        <input type='text' className=' bg-black ml-2 mt-3 px-5 text-white text-opacity-80 border-none outline-none py-2 rounded-full w-5/6' onChange={(e)=> setUsername(e.target.value)} placeholder='username' />
                    </div>
                    <div className='flex flex-col px-4 w-full py-3'>
                        <label className=' text-xl font-semibold '>
                            Email
                        </label>
                        <input onChange={(e)=> setEmail(e.target.value)} className='bg-black text-white text-opacity-80 ml-2 mt-3 px-5 border-none outline-none py-2 rounded-full w-5/6' type='email' placeholder='email' />
                    </div>
                    <div className='flex flex-col w-full px-4 py-3'>
                        <label className=' text-xl font-semibold '>
                            Password
                        </label>
                        <input onChange={(e)=> setPassword(e.target.value)} className='bg-black text-white text-opacity-80 ml-2 mt-3 px-5 border-none outline-none py-2 rounded-full w-5/6' type='password' placeholder='password' />
                    </div>
                </div>
                <div className=' flex flex-col justify-center items-center'>
                    <button onClick={handleSignIn} className=' bg-black hover:bg-gradient-to-t from-cyan-500 to-cyan-900 text-white py-2 mb-2 px-28 rounded-full text-lg font-semibold'>SignIn</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn