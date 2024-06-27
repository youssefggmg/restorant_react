import React, { useEffect, useState } from 'react';
import "./style/main.css";
import axios from 'axios';
import './index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Mainpage = () => {
    const [Meal, setMeal] = useState([]); // Initialize as an array
    const [lastFiveMeals, setLastFiveMeals] = useState([]);
    const categorys = ["breakfast.jpeg", "launch.jpeg", "diner.jpeg"];

    const getmeals = async (url) => {
        try {
            const response = await axios.get(url);
            const meals = response.data;
            setMeal(meals);
            const lastFiveMeals = meals.slice(-5); // Get the last 5 items
            setLastFiveMeals(lastFiveMeals);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getmeals("http://localhost:8000/meals");
    }, []);

    console.log(Meal);

    return (
        <>
            <h1 className='title text-center mt-4 mb-6'>The Latest Meals Added</h1>
            <div className='latestMeals grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4'>
                {lastFiveMeals.map(meal => (
                    <div key={meal.id} className='meal border rounded-lg p-4 bg-zinc-500'>
                        <img src={meal.image} alt={meal.title} className='mealImage w-full h-40 object-cover rounded-lg' />
                        <div className='content mt-4'>
                            <h2 className='text-xl font-semibold'>{meal.title}</h2>
                            <hr className='my-2'/>
                            <p className='text-gray-700'>{meal.description}</p>
                        </div>
                        <h3 className='category text-right mt-2 text-sm text-gray-500'>{meal.catigory}</h3>
                    </div>
                ))}
            </div>
            <h1 className='title text-center mt-10 mb-6'>The Categories</h1>
            <div className='flex flex-wrap justify-center gap-6 px-4'>
                {categorys.map((category, index) => {
                    return (
                        <div key={index} className="max-w-xs border border-gray-200 rounded-lg shadow dark:border-gray-700 bg-zinc-400 flex flex-col">
                            <img className="rounded-t-lg category-image self-center mt-6 w-full h-40 object-cover" src={category} alt={category} />
                            <div className="p-5 flex justify-center">
                                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 Rochester">Breakfast</h1>
                            </div>
                        </div>
                    )
                })}
            </div>

            <h1 className='title text-center mt-10 mb-6'>All the Meals</h1>
            <div className='meals-show grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 px-4'>
                {Meal.map((meal) => {
                    return (
                        <div>
                        <Card key={meal.id} className='my-4 shadow-lg'>
                            <Card.Img variant="top" src={meal.image} alt='meal images' className='w-full h-40 object-cover' />
                            <Card.Body className='bg-gray-500'>
                                <Card.Title className='text-lg font-bold'>{meal.title}</Card.Title>
                                <Card.Text className='text-gray-200'>
                                    {meal.description}
                                </Card.Text>
                                <Button variant="primary">More info</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Mainpage;
