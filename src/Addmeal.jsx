import React, { useState, useEffect } from 'react';
import "./style/addmeal.css";

const Addmeal = () => {
    return (
        <>
            <div>
                <h1 className='title text-center py-10'>Add Meal</h1>
                <div className='flex flex-col items-center justify-center p-6 sm:p-10 bg-gray-400 w-11/12 sm:w-4/5 m-auto rounded-2xl'>
                    <form action="" className='w-full sm:w-3/5 flex flex-col'>
                        <div className='flex flex-col sm:flex-row justify-between items-center my-6'>
                            <label htmlFor="title" className='label text-xl sm:text-2xl lg:text-3xl Rochester'>Title</label>
                            <input type="text" name="title" id="title" className='border-2 border-gray-300 rounded-md w-full sm:w-2/3 lg:w-3/4 h-10 px-2 input mt-2 sm:mt-0' />
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between items-center my-6'>
                            <label htmlFor="description" className='label text-xl sm:text-2xl lg:text-3xl Rochester'>Description</label>
                            <input type="text" name="description" id="description" className='border-2 border-gray-300 rounded-md w-full sm:w-2/3 lg:w-3/4 h-10 px-2 input mt-2 sm:mt-0' />
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between items-center my-6'>
                            <label htmlFor="image" className='label text-xl sm:text-2xl lg:text-3xl Rochester'>Image</label>
                            <input type="text" name="image" id="image" className='border-2 border-gray-300 rounded-md w-full sm:w-2/3 lg:w-3/4 h-10 px-2 input mt-2 sm:mt-0' />
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between items-center my-6'>
                            <label htmlFor="category" className='label text-xl sm:text-2xl lg:text-3xl Rochester'>Category</label>
                            <input type="text" name="category" id="category" className='border-2 border-gray-300 rounded-md w-full sm:w-2/3 lg:w-3/4 h-10 px-2 input mt-2 sm:mt-0' />
                        </div>
                        <button type="button" className="text-white bg-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-4">Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addmeal;
