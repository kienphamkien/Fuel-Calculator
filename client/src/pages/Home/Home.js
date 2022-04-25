import React from 'react'
import"./Home.css"
import logo from "./fuel.jpeg"


const Home = () => {
  return (
    <div className='Home'>
        <div>
        <img src={logo} alt={"logo"} id="logo" />
            </div>
        <h1>Fuel App - Instant, Cheap Fuel Quote. Drive more. Worry less!</h1>
        
    
    </div>
  )
}

export default Home