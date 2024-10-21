import React from 'react';


const About = () => {
    return (
        <div className="about-page">
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
                        <p>Hi, I'm [Your Name], a passionate full-stack developer who loves creating intuitive web applications. Recipe Explorer is designed to make cooking easier and more fun.</p>
                    </div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section className="about-section gallery-section">
                <div className="container">
                    <h2>App Screenshots</h2>
                    <div className="gallery-grid">
                        <img src="screenshot1-url.jpg" alt="Screenshot 1" />
                        <img src="screenshot2-url.jpg" alt="Screenshot 2" />
                        <img src="screenshot3-url.jpg" alt="Screenshot 3" />
                    </div>
                </div>
            </section>

            {/* Future Features Section */}
            <section className="about-section future-features-section">
                <div className="container">
                    <h2>Future Features</h2>
                    <ul>
                        <li>User authentication and social sharing</li>
                        <li>Shopping list creation from recipes</li>
                        <li>Meal planning and scheduling</li>
                        <li>Dark mode and customizable themes</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default About;
