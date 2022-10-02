import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-image" role="img">
            <section className="title-and-btn">
                <header className="title">
                    <h1>FiguresFlow</h1>
                </header>
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
            </section>
        </div>
    );
};

export default Home;