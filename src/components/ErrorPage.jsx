import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col px-4 py-5 text-white w-2/8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-between h-1/4 shadow-2xl'>
                <div className='text-center'>
                    <h2 className=' text-2xl font-fontTenorSans'><span className=' text-red-600 font-medium font-fontTenorSans'>Error 404</span>, Page Not found</h2>
                    <p className='text-white text-opacity-85 font-fontTenorSans font-semibold mx-2'>Please return to the Home page</p>
                </div>
                <div>
                    <Link to={"/"}>
                        <button className=' bg-blue-700 hover:bg-white hover:bg-opacity-90 hover:transition-all hover:text-black px-5 py-2 hover:shadow-2xl rounded-full text-white font-bold font-fontTenorSans'>Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage