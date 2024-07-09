import React from 'react'
import Hero from './Hero.jsx';
import Mainpage from './Mainpage.jsx';


const Home = ({getmeal}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Hero /><Mainpage getmeal={getmeal} />
        </div>
    )
}

export default Home
