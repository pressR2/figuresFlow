import { Link } from "react-router-dom";
import homePageImage from "../../images/home-page.jpg";
import "./Home.css";

function Home() {
    return (
        <div className="home-page-container">
            <div className="title-and-links">
                <div className="title">
                    <h1>Craft Hobby Journal</h1>
                </div>
                <div className="buttons-container_home">
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
            <img
                className="home-page-image"
                src={homePageImage}
                alt="River Troll"
            />
        </div>
    );
}

export default Home;