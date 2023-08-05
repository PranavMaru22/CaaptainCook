import React from 'react'
import { useCookies } from 'react-cookie';
import {Link, NavLink, useNavigate} from "react-router-dom";
const NavBar = () => {

    const [cookie,setCookie] = useCookies(["access_token"]);
    const navigate = useNavigate();


    const logout = () => {
        setCookie("access_token","");
        window.localStorage.removeItem("userID");
        navigate("/auth/login");
    }


    return (
    <div className=' flex justify-between items-center hover:transition-all hover:animate-in w-full text-white h-16 bg-gradient-to-r font-fontTenorSans from-red-500 to-pink-600'>
        <div>
            <Link to={"/"}>
                <img 
                    src={require("../assets/CaptainCook--logoss.jpg")}
                    alt=''
                    className=' w-12 ml-12 rounded-full   '
                />
            </Link>
        </div>
        <div className=' flex justify-center items-center'>
            <NavLink to={"/"} className={"m-6 rounded-full hover:bg-white  hover:text-black font-semibold px-4 text-lg py-2"} >
                Home
            </NavLink>
            <NavLink to={"/about"} className={"m-6 rounded-full hover:bg-white hover:text-black hover:transition-all hover:animate-in font-semibold px-4 text-lg py-2"}>
                About
            </NavLink>
            <NavLink to={"/create-a-recipe"} className={"m-6 rounded-full hover:bg-white hover:text-black font-semibold px-4 text-lg py-2"}>
                Create Recipe
            </NavLink>
            <NavLink to={"/saved-recipes"} className={"m-6 rounded-full hover:bg-white hover:text-black font-semibold px-4 text-lg py-2"}>
                Saved Recipe
            </NavLink>
        </div>
        <div className='text-black transition-all'>
            {!cookie.access_token ? (<><NavLink to={"/auth/signin"} className={"m-6 rounded-full hover:bg-white ml-auto hover:text-black font-semibold text-lg"}>
                <button className='bg-white px-3 py-1 rounded-xl'>SignIn</button>
            </NavLink>
            <NavLink to={"/auth/login"} className={"m-6 rounded-full hover:bg-white ml-auto hover:text-black font-semibold text-lg"}>
                <button className='bg-white px-3 py-1 rounded-xl'>Login</button>
            </NavLink></>):(
                    <button onClick={()=> logout()} className='bg-white font-semibold mx-6 px-3 py-1 rounded-xl'>Log out</button>
                    )}
        </div>
    </div>
    )
}

export default NavBar