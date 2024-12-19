import { Icon } from 'semantic-ui-react';
import React from 'react';


const About = () => {
    return (
        <>
            {/* Fullscreen Hero Section */}
            <section className="hero-section" style={{ backgroundImage: 'url(https://themewagon.github.io/delicious/img/bg-img/bg4.jpg)' }}>
                <div className="hero-content">
                    <h1>About Recipe Explorer</h1>
                    <p>Your gateway to discovering and creating culinary masterpieces.</p>
                </div>
            </section>

            {/* Project Overview Section */}
            <section className="about-section overview-section">
                <div className="container">
                    <h2>Project Overview</h2>
                    <p>
                        Recipe Explorer is your go-to app for discovering, saving, and creating exciting recipes.
                        Powered by advanced technology, it offers a smooth, modern interface for culinary enthusiasts.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="about-section features-section">
                <div className="container">
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Search Recipes</h3>
                            <p>Find recipes based on ingredients, cuisine, or dietary needs.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Save Favorites</h3>
                            <p>Bookmark your favorite recipes to access anytime.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Detailed Nutrition</h3>
                            <p>Get complete nutritional information for every recipe.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Famous Recipes</h3>
                            <p>Get most famous recipes in around the world recipe.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="about-section tech-stack-section">
                <div className="container">
                    <h2>Tech Stack</h2>
                    <div className="tech-grid">
                        <div className="tech-item">React</div>
                        <div className="tech-item">Redux</div>
                        <div className="tech-item">Styled Components</div>
                        <div className="tech-item">Edamam API</div>
                        <div className="tech-item">LocalStorage</div>
                        <div className="tech-item">Framer Motion</div>
                    </div>
                </div>
            </section>

            {/* Developer Section */}
            <section className="about-section developer-section">
                <div className="container">
                    <h2>About the Developer</h2>
                    <div className="developer-info">
                        {/* <img src="your-photo-url.jpg" alt="Developer" className="developer-photo" /> */}
                        <p>Hi, I'm [Deepesh Boharpi], a passionate full-stack developer who loves creating intuitive web applications. Recipe Explorer is designed to make cooking easier and more fun.</p>
                    </div>
                </div>
            </section>


            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Recipe Explorer. All rights reserved.</p>
                    <div className="social-icons">
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <Icon name="facebook" />
                        </a>
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <Icon name="instagram" />
                        </a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <Icon name="github" />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <Icon name="linkedin" />
                        </a>
                        {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <Icon name="twitter" />
                        </a> */}
                    </div>
                </div>
            </footer>



        </>
    );
};
export default About;
