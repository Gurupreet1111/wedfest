import React from 'react';
import {  Link } from 'react-router-dom';
import Add from "./add";
import Cards from "./cards";
import "./styles.css";

const Home = () => {
// 	return <h1>Welcome to the world of Geeks
// <Link to="/about">About Us</Link>

// 	</h1>
return (
  <div className="home-container">
    <div className="chat-div">

    </div>
      <div className="advertisement">
        {/* add container */}
        <Add />
      </div>
      <div className="cards">
        {/* cards container */}
        <Cards />
      </div>
  </div>
)
	
}

export default Home;
