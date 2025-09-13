import React, { useState } from 'react';
import '../styles/About.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';

function About({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header">
        <nav className="navbar">
          <div className="brand">
            <span className="brand-name">YieldAI</span>
          </div>
          <div className="nav-center">
            <ul className="nav-group">
              <li className="nav-item"><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}><span className="home-dot">⌂</span> Home</a></li>
              <li className="nav-item active"><a href="#about">About Us</a></li>
              <li className="nav-item"><a href="#prediction" onClick={(e) => { e.preventDefault(); onNavigate('prediction'); }}>Prediction</a></li>
              <li className="nav-item"><a href="#products">Products</a></li>
              <li className="nav-item"><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="nav-actions">
            <a className="login" href="#signin">Sign In</a>
            <a className="signup outline" href="#signup">Sign up Free</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="about-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Empowering Farmers with AI-Driven Insights for Sustainable Yields</h1>
              <p className="hero-subtitle">
                At YieldAI, we harness historical data, weather patterns, and soil metrics to predict crop yields 
                and provide tailored recommendations, helping small-scale farmers boost productivity by 10% or more.
              </p>
              <div className="hero-cta">
                <button className="cta-button primary" onClick={() => onNavigate('prediction')}>
                  Try Yield Prediction
                </button>
                <button className="cta-button secondary">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <img src={img1} alt="Farmers using AI technology" className="hero-image" />
              <div className="floating-icons">
                <div className="icon ai-icon">AI</div>
                <div className="icon crop-icon">CROP</div>
                <div className="icon weather-icon">WEATHER</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="nav-tabs-section">
          <div className="nav-tabs-container">
            <div className="tabs">
              <button 
                className={`tab ${activeSection === 'story' ? 'active' : ''}`}
                onClick={() => setActiveSection('story')}
              >
                Our Story
              </button>
              <button 
                className={`tab ${activeSection === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveSection('mission')}
              >
                Mission & Vision
              </button>
              <button 
                className={`tab ${activeSection === 'team' ? 'active' : ''}`}
                onClick={() => setActiveSection('team')}
              >
                Our Team
              </button>
              <button 
                className={`tab ${activeSection === 'achievements' ? 'active' : ''}`}
                onClick={() => setActiveSection('achievements')}
              >
                Achievements
              </button>
              <button 
                className={`tab ${activeSection === 'differentiators' ? 'active' : ''}`}
                onClick={() => setActiveSection('differentiators')}
              >
                What Sets Us Apart
              </button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        {activeSection === 'story' && (
          <section className="content-section">
            <div className="content-container">
              <div className="content-text">
                <h2 className="section-title">Our Story</h2>
                <div className="story-content">
                  <p className="story-intro">
                    Founded as part of the Smart India Hackathon (SIH) 2025, YieldAI was born from a passion 
                    to address the challenges faced by small-scale farmers in India and beyond. With unpredictable 
                    weather, soil degradation, and resource constraints leading to yield losses of up to 30%, 
                    we saw the need for accessible, data-driven tools.
                  </p>
                  <p className="story-journey">
                    Our team of passionate students and engineers developed this platform using machine learning 
                    models trained on open-source datasets, integrated with real-time APIs for weather and soil data. 
                    From a 36-hour hackathon prototype to a scalable web solution, we're committed to turning AI 
                    into a farmer's best ally.
                  </p>
                  <p className="story-impact">
                    We aim to democratize precision agriculture, supporting regional crops like rice, wheat, 
                    and maize, and promoting sustainable practices that reduce water and fertilizer use.
                  </p>
                </div>
              </div>
              <div className="content-images">
                <div className="image-grid">
                  <img src={img2} alt="SIH 2025 Hackathon" className="story-image" />
                  <img src={img3} alt="Team Development" className="story-image" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Mission & Vision Section */}
        {activeSection === 'mission' && (
          <section className="content-section">
            <div className="content-container">
              <div className="mission-content">
                <div className="mission-card">
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">
                    To provide small-scale farmers with accurate yield predictions and actionable recommendations, 
                    enabling informed decisions on irrigation, fertilization, and pest control—tailored to local 
                    conditions and accessible in regional languages.
                  </p>
                </div>
                <div className="vision-card">
                  <h3 className="card-title">Our Vision</h3>
                  <p className="card-text">
                    A future where every farmer, regardless of scale, leverages AI for resilient, high-yield farming, 
                    contributing to global food security and environmental sustainability.
                  </p>
                </div>
              </div>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">INNOVATION</div>
                  <h4 className="value-title">Innovation</h4>
                  <p className="value-text">Using regression and neural networks for 85-95% accurate predictions</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">ACCESSIBILITY</div>
                  <h4 className="value-title">Accessibility</h4>
                  <p className="value-text">Multilingual interface and low-data mobile app for rural users</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">SUSTAINABILITY</div>
                  <h4 className="value-title">Sustainability</h4>
                  <p className="value-text">Recommendations that optimize resources, aligning with SDGs like Zero Hunger</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">COMMUNITY</div>
                  <h4 className="value-title">Community Focus</h4>
                  <p className="value-text">Empowering farmers through data, not replacing their expertise</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Our Team Section */}
        {activeSection === 'team' && (
          <section className="content-section">
            <div className="content-container">
              <h2 className="section-title">Our Team</h2>
              <div className="team-grid">
                <div className="team-member">
                  <img src={img4} alt="Team Member" className="member-photo" />
                  <h3 className="member-name">Amit Sharma</h3>
                  <p className="member-role">AI Specialist</p>
                  <p className="member-bio">
                    Leads ML model development using TensorFlow. A final-year CS student with expertise 
                    in data analytics, passionate about agri-tech solutions.
                  </p>
                </div>
                <div className="team-member">
                  <img src={img5} alt="Team Member" className="member-photo" />
                  <h3 className="member-name">Priya Patel</h3>
                  <p className="member-role">UI/UX Designer</p>
                  <p className="member-bio">
                    Creates intuitive interfaces for farmers. Specializes in accessibility and 
                    multilingual design for rural communities.
                  </p>
                </div>
                <div className="team-member">
                  <img src={img6} alt="Team Member" className="member-photo" />
                  <h3 className="member-name">Rajesh Kumar</h3>
                  <p className="member-role">Agriculture Expert</p>
                  <p className="member-bio">
                    Provides domain expertise in crop science and farming practices. 
                    Ensures our recommendations align with real-world farming needs.
                  </p>
                </div>
                <div className="team-member">
                  <img src={img7} alt="Team Member" className="member-photo" />
                  <h3 className="member-name">Sneha Singh</h3>
                  <p className="member-role">Data Scientist</p>
                  <p className="member-bio">
                    Processes weather and soil data integration. Expert in API development 
                    and real-time data processing for agricultural insights.
                  </p>
                </div>
              </div>
              <div className="team-note">
                <p>
                  Our multidisciplinary team includes experts in AI, agriculture, UI/UX, and regional outreach. 
                  Guided by faculty mentors and inspired by SIH 2025, we're committed to making AI accessible to farmers.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Achievements Section */}
        {activeSection === 'achievements' && (
          <section className="content-section">
            <div className="content-container">
              <h2 className="section-title">Achievements & Milestones</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">September 2025</div>
                  <div className="timeline-content">
                    <h3>SIH 2025 Development</h3>
                    <p>Developed MVP during Smart India Hackathon 2025 Software Edition</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">October 2025</div>
                  <div className="timeline-content">
                    <h3>Beta Testing</h3>
                    <p>Piloted with 50+ farmers in Maharashtra, achieving 12% average yield improvement</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">November 2025</div>
                  <div className="timeline-content">
                    <h3>API Integration</h3>
                    <p>Integrated with IMD weather APIs and USDA datasets for global relevance</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">Future Plans</div>
                  <div className="timeline-content">
                    <h3>Expansion</h3>
                    <p>Expanding to more crops and integrating IoT sensors for precise soil data</p>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <img src={img8} alt="Farmer testimonial" className="testimonial-image" />
                <blockquote className="testimonial-quote">
                  "This app saved my crop from drought. The predictions were accurate and helped me 
                  optimize my irrigation schedule. YieldAI is a game-changer for small farmers like me."
                </blockquote>
                <cite className="testimonial-author">- Farmer from Maharashtra</cite>
              </div>
            </div>
          </section>
        )}

        {/* What Sets Us Apart Section */}
        {activeSection === 'differentiators' && (
          <section className="content-section">
            <div className="content-container">
              <h2 className="section-title">What Sets Us Apart</h2>
              <div className="differentiators-grid">
                <div className="differentiator-card">
                  <div className="card-icon">PERSONALIZED</div>
                  <h3 className="card-title">Personalized Insights</h3>
                  <p className="card-text">
                    Crop- and region-specific predictions using historical trends and local conditions
                  </p>
                </div>
                <div className="differentiator-card">
                  <div className="card-icon">DESIGN</div>
                  <h3 className="card-title">User-Friendly Design</h3>
                  <p className="card-text">
                    Supports regional languages and offline modes for mobile accessibility in rural areas
                  </p>
                </div>
                <div className="differentiator-card">
                  <div className="card-icon">IMPACT</div>
                  <h3 className="card-title">Proven Impact</h3>
                  <p className="card-text">
                    Backed by research showing 10-20% productivity gains in pilot programs
                  </p>
                </div>
                <div className="differentiator-card">
                  <div className="card-icon">ACCESS</div>
                  <h3 className="card-title">Free Core Features</h3>
                  <p className="card-text">
                    Basic access for small farmers, with premium options for advanced analytics
                  </p>
                </div>
              </div>
              <div className="cta-section">
                <h3 className="cta-title">Ready to Transform Your Farming?</h3>
                <p className="cta-text">Join thousands of farmers already using YieldAI to boost their productivity</p>
                <div className="cta-buttons">
                  <button className="cta-button primary" onClick={() => onNavigate('prediction')}>
                    Start Predicting Now
                  </button>
                  <button className="cta-button secondary">
                    Download App
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-icon">Y</div>
              <span className="footer-name">YieldAI</span>
            </div>
          </div>
          
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#prediction">Prediction</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 YieldAI. All rights reserved. Built for SIH 2025.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;