import React, { useEffect, useState } from 'react'
import "./style/main.css"
import axios from 'axios';

const Mainpage = () => {
    const [meal,setMeal]=useState("")
    const getmeals= async(url)=>{
        try {
            const meals = await axios.get(url)
            setMeal(meals.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getmeals("http://localhost:8000/meals");
    },[])
    return (
        <>
        <h1 className='title'> the latest meals Add</h1>

        <div className='latestMeals'></div>
        </>
    )
}

export default Mainpage
