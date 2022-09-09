// 1. components are simple java script functions.
// 2. function name should always start with upper case later.
// 3. fuction should always return sinngle jsx element
// 4. function should be exported
// 5. rafce

import React from 'react'
import './Home.css';
import logo from '../logo.svg';
const Home = () => {
  return (
    <div>
        <h1 className="head1" style={{color : 'red', backgroundColor : 'yellow'}}> My Home Component </h1>
        <hr/>
        <img src={logo}/>
        <button/>
        
    </div>

  )
}

export default Home