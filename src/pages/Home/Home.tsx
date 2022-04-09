import React from 'react';
import homePageImage from '../../images/home-page.jpg';
import './homePage.css';

function Home() {
  return (
    <div className="Home">
      <div className='home-page-container'>
        <div className='title'>
          <h1>Craft Hobby Journal</h1>
        </div>
        <img className ='home-page-image' src = {homePageImage} alt ='River Troll'></img>
        <div className='buttons-container'>
          <button className='home-page_sign-in'>Sign In</button>
          <button className='home-page_sign-up'>Sign Up</button>
          <button className='home-page_demo'>Demo</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
