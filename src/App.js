import React from 'react';
import './style.css'; // Make sure to import your CSS file

function App() {
    return (
        <div className="App">
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">Review App</div>
                    <ul className="nav-menu">
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#feedback">Feedback</a></li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                <h2>Submit Your Review</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <textarea placeholder="Your Review" required></textarea>
                    <button type="submit">Submit</button>
                </form>
                <div className="reviews" id="reviews">
                    {/* Reviews will go here */}
                </div>
            </div>

          

            <footer>
                <p>© 2024 Review App | All rights reserved</p>
            </footer>
        </div>
    );
}

export default App;
