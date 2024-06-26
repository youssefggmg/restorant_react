import React, { useEffect, useState } from 'react';
import "./style/main.css";
import axios from 'axios';

const Mainpage = () => {
    const [meal, setMeal] = useState([]); // Initialize as an array
    const [lastFiveMeals,setLastFiveMeals] = useState([])

    const getmeals = async (url) => {
        try {
            const response = await axios.get(url);
            const meals = response.data;
            setMeal(meals)
            const lastFiveMeals = meals.slice(-5); // Get the last 5 items
            setLastFiveMeals(lastFiveMeals);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getmeals("http://localhost:8000/meals");
    }, []);

    console.log(meal);

    return (
        <>
            <h1 className='title'>The Latest Meals Added</h1>
            <div className='latestMeals'>
                {lastFiveMeals.map(meal => (
                    <div key={meal.id} className='meal'>
                        <img src={meal.image} alt={meal.title} className='mealImage' />
                        <div className='content'>
                            <h2>{meal.title}</h2>
                            <hr />
                            <p>{meal.description}</p>
                        </div>
                        <h3 className='category'> {meal.catigory}</h3>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Mainpage;