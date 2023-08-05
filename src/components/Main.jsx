import axios from 'axios';
import React, { useEffect, useState } from 'react'



export const MenuCard = ({name,recipeId, instructions, ingredients, cookingTime, imageURL}) => {
    
    const userID = window.localStorage.getItem("userID");
    const [savedRecipes,setSavedRecipes] = useState([]);

    useEffect(()=> {

        const fetchSavedRecipes = async(userID)=> {

            try {
                
                const fetchSaved = await axios.get(`http://localhost:8000/api/recipes/saved-recipes/${userID}`);
                setSavedRecipes(fetchSaved.data.savedRecipes);
                console.log(fetchSaved);
            } catch (error) {
                alert("Cannot fetch the saved ones!!")
            }
        }

        fetchSavedRecipes(userID);
    },[])

    const SaveRecipe = async(recipeId) => {

        const saveRecipe = await axios.put("http://localhost:8000/api/recipes/save-recipe",{recipeId,userID});
        setSavedRecipes(saveRecipe.data.savedRecipes);
        console.log("Saved Recipes",saveRecipe.data);
    }

    return (
        <div className=' h-cardHeight w-cardWidth rounded-lg bg-gradient-to-r from-red-500 via-orange-400 to-blue-300 shadow-2xl mx-10 my-8 pb-3'>
            <div className=' bg-black rounded-tl-lg rounded-tr-lg relative h-3/5'>
                <img 
                    src={imageURL}
                    alt={`${recipeId}.png`}
                    className=' text-white  h-full object-contain'
                />
            </div>

        {/* Creating the details section of the card. */}
        
            <div className=' h-2/5'>
                <div className="flex justify-between w-ful px-3 py-2">
                    <h1 className=' font-mono text-white text-3xl'>{name}</h1>
                    {   !savedRecipes.includes(recipeId) ?   
                        <button type='button' onClick={()=> SaveRecipe(recipeId)} className=' bg-white px-2 rounded-lg py-0 font-mono text-sm hover:bg-gray-400 hover:text-white hover:font-semibold hover:transition-all'>
                            Save
                        </button>:
                        <button type='button' disabled={true} className=' text-white font-semibold px-2 rounded-lg py-0 bg-gray-500 font-mono text-sm cursor-not-allowed'>
                        Saved
                        </button>
                    }
                </div>

                <div className=' px-4 py-2'>
                    <div className='flex flex-col justify-start'>
                        <h2 className=' font-fontTenorSans text-gray-300 underline bg-yellow-800 font-semibold px-2 rounded-md'>Instructions</h2>
                        <p className=' text-white font-fontTenorSans py-2 px-2'>{instructions}</p>
                    </div>
                    <div>
                        <h2 className=' font-fontTenorSans text-gray-300 underline bg-yellow-800 font-semibold px-2 rounded-md'>Ingredientts</h2>
                        <p className=' text-white font-fontTenorSans py-2 overflow-hidden px-2'>{ingredients}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Main = () => {

    const [menu,setMenu] = useState([]);

    useEffect(()=> {
        const fetchMenu = async() => {
            const res = await axios.get("http://localhost:8000/api/recipes/");
            setMenu(res.data);
            console.log(res.data);
        }

        fetchMenu();
    },[])

    return (
        <div className=''>
            <div className=' font-mono rounded-sm bg-gradient-to-r from-red-500 to-pink-600 text-white text-3xl my-4 mx-5 bg-slate-400 px-4 py-2'><span>🔯</span>Recipes</div>
            <div className='md:flex md:flex-row sm:flex sm:flex-col sm:justify-center md:justify-center md:flex-wrap sm:items-center mx-2 my-3'>
            {
                menu.map((recipe,idx)=>
                    <MenuCard
                        key={idx}
                        name={recipe?.name}
                        recipeId = {recipe?._id} 
                        instructions={recipe?.instructions} 
                        ingredients = {recipe?.ingredients} 
                        cookingTime = {recipe?.cookingTime} 
                        imageURL = {recipe?.imageURL} 
                    />
                )
            }
            </div>
        </div>
    )
}



export default Main