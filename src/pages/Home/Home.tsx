import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <div className="home-image" role="image">
                <div className="title-and-btn">
                    <div className="title">
                        <h1>FiguresFlow</h1>
                    </div>
                    <div className="home-btn-container">
                        <ul className="btn-list">
                            <Link to="/signIn" className="home-signin-btn">
                                Sign In
                            </Link>
                            <Link to="/signUp" className="home-signup-btn">
                                Sign Up
                            </Link>
                            <Link to="/demo" className="demo-btn">
                                Demo
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
