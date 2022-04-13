import React from "react";
import { Link } from "react-router-dom";
import homePageImage from "../../images/home-page.jpg";
import "./Home.css";

function Home() {
    return (
        <div className="Home">
            <div className="home-page-container">
                <div className="title">
                    <h1>Craft Hobby Journal</h1>
                </div>
                <img
                    className="home-page-image"
                    src={homePageImage}
                    alt="River Troll"
                ></img>
                <div className="buttons-container">
                    <ul className="link-list">
                        <Link to="/signIn" className="home-page_sign-in">
                            Sign In
                        </Link>
                        <Link to="/signUp" className="home-page_sign-up">
                            Sign Up
                        </Link>
                        <Link to="/demo" className="home-page_demo">
                            Demo
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
