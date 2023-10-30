import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/luffy.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
    <div className='headerContainer'>
      <h1>Anime World</h1>
      <p1>Vibrant Worlds To Life</p1>
      <Link to="/menu">
         <button>List</button>
      
     </Link>
    </div>
     
    </div>
  )
}

export default Home
