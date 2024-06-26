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
                        <h3 className='category'>{meal.catigory}</h3>
                    </div>
                ))}
            </div>
            <h1 className='title'>The Categories</h1>
            <div className='flex justify-around px-32'>
                {categorys.map((category, index) => {
                    return (
                        <div key={index} className="max-w-sm border border-gray-200 rounded-lg shadow dark:border-gray-700 bg-zinc-400 flex flex-col">
                            <img className="rounded-t-lg category-image self-center mt-6" src={category} alt={category} />
                            <div className="p-5 flex justify-center">
                                <h1 className="mb-2 text-8xl font-bold tracking-tight text-gray-900 Rochester">Breakfast</h1>
                            </div>
                        </div>
                    )
                })}
            </div>

            <h1 className='title'>All the Meals</h1>
            <div className='meals-show flex flex-wrap justify-center'>
                {Meal.map((meal) => {
                    return (
                        <Card key={meal.id} style={{ width: '20rem' }} className='my-7'>
                            <Card.Img variant="top" src={meal.image} alt='meal images' />
                            <Card.Body className='bg-gray-500 '>
                                <Card.Title>{meal.title}</Card.Title>
                                <Card.Text>
                                    {meal.description}
                                </Card.Text>
                                <Button variant="primary">Moor info</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </>
    );
};

export default Mainpage;
