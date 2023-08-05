import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const owner = window.localStorage.getItem("userID")

const CreateRecipe = () => {

    const [recipe,setRecipe] = useState({
        name:"",
        ingredients:"",
        instructions:"",
        cookingTime:"",
        imageUrl:"",
        userOwner:owner,
    });  

    const navigate = useNavigate();


    const handleRecipe = async(e) => {
        e.preventDefault();
        
        try {
            var res = await axios.post("http://localhost:8000/api/recipes/create-recipe",
                recipe
            )
            console.log(res.data);
            alert("recipe created!!");
            navigate("/");
        } catch (error) {
            console.log(recipe);
            window.alert(error);
        }
    }

    const handleChange = (event) => {
        
        const {name,value} = event.target;

        setRecipe({...recipe,[name]:value});
    }

    return (
        <div className=' flex flex-col bg-gradient-to-r from-gray-900 via-red-500 to-pink-600 font-mono justify-center h-screen items-center text-black'>
            <div className='bg-white w-2/6 bg-opacity-90 px-2 py-3 rounded-3xl'>
                <div className='flex flex-col justify-between px-2 py-3 h-full'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center m-2'>
                            <label className=' text-lg'>Name of Recipe </label>
                            <input type='text' name='name' onChange={handleChange} className='px-4 bg-gray-300 py-2 outline-none focus:bg-opacity-90 w-72 border-none rounded-full' placeholder='Recipe name..' />
                        </div>
                        <div className=' flex justify-between items-center m-2'>
                            <label className=' text-lg'>Ingredients </label>
                            <textarea type='text' name='ingredients' onChange={handleChange} className=' focus:bg-opacity-90 bg-gray-300 px-4 py-2 outline-none rounded-lg resize-none w-72' placeholder='Ingredients to be used..' />
                        </div>
                        <div className='flex justify-between items-center m-2'>
                            <label className=' text-lg'>Instructions </label>
                            <textarea type='text' name='instructions' onChange={handleChange} className='px-4 focus:bg-opacity-90 bg-gray-300 py-2  w-72 justify-stretch rounded-lg resize-none outline-none ' placeholder='Enter instructions here...' />
                        </div>
                        <div className='flex justify-start items-center m-2'>
                            <label className=' text-lg'>Coooking Time 
                            <input type='text' name='cookingTime' onChange={handleChange} className=' ml-10 outline-none border-none w-14 text-opacity-80 text-gray-900 bg-gray-200 focus:bg-opacity-90 px-2 py-1 rounded-xl ' min={0} max={180} defaultValue={30} /> <span className='text-gray-600 text-opacity-50 font-semibold'>minutes</span></label>
                        </div>
                        <div className='flex justify-between items-center m-2'>
                            <label className=' text-lg'>Image URL </label>
                            <input type='text' name='imageUrl' onChange={handleChange} className='focus:bg-opacity-90 rounded-full bg-gray-300 outline-none px-4 py-2 w-72' placeholder='' />
                        </div>
                    </div>
                    <div className=' flex justify-around px-2 py-2 mt-4 h-full'>
                        <button  type='button' onClick={() => navigate("/")} className='bg-red-700 text-white font-semibold hover:shadow-2xl hover:bg-red-600 px-4 py-2 rounded-full'>Cancel</button>
                        <button type='button' onClick={handleRecipe}  className='bg-blue-500 hover:bg-blue-400 text-white  font-semibold px-4 py-2 hover:shadow-2xl rounded-full'>Create Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRecipe