import React, { useState } from 'react';
import './about.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import landingImg from '../assets/landing.png';

function About({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('organic');

  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header">
        <nav className="navbar">
          <div className="brand">
            <span className="brand-name">Synopsis</span>
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
        {/* Year and Tabs Section */}
        <section className="year-tabs-section">
          <div className="year-tabs-container">
            <div className="left-content">
              <div className="year">2025</div>
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'organic' ? 'active' : ''}`}
                  onClick={() => setActiveTab('organic')}
                >
                  Organic farm
                </button>
                <button 
                  className={`tab ${activeTab === 'automation' ? 'active' : ''}`}
                  onClick={() => setActiveTab('automation')}
                >
                  Automation farm
                </button>
                <button 
                  className={`tab ${activeTab === 'biomedical' ? 'active' : ''}`}
                  onClick={() => setActiveTab('biomedical')}
                >
                  Bio-medical farm
                </button>
              </div>
            </div>
            <div className="right-content">
              <h1 className="main-heading">
                Despite Advances In Agri-Tech, Traditional Labor-Intensive Farming Highlights Ongoing Inefficiencies.
              </h1>
              <div className="links">
                <a href="#harvesting" className="content-link">Harvesting Legacy.</a>
                <a href="#planting" className="content-link">Planting Tomorrow</a>
              </div>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="carousel-section">
          <div className="carousel-container">
            <div className="get-started-card">
              <h3>Get Started Now</h3>
              <button className="plus-btn">+</button>
            </div>
            <div className="image-cards">
              <div className="image-card">
                <img src={img3} alt="Technology Irrigation" />
                <div className="card-label">Technology Irrigation</div>
              </div>
              <div className="image-card">
                <img src={img1} alt="Technology Irrigation" />
                <div className="card-label">Technology Irrigation</div>
              </div>
              <div className="image-card">
                <img src={img2} alt="Organic Fertilizer" />
                <div className="card-label">Organic Fertilizer</div>
              </div>
              <div className="image-card">
                <img src={img4} alt="Agricultural Monitoring" />
                <div className="card-label">Agricultural Monitoring</div>
              </div>
            </div>
            <div className="carousel-nav">
              <button className="nav-btn prev">‹</button>
              <button className="nav-btn next">›</button>
            </div>
          </div>
        </section>

        {/* Single Image Section - 5.png */}
        <section className="single-image-section">
          <div className="single-image-container">
            <img src={img5} alt="Agricultural Technology" className="single-image" />
          </div>
        </section>

        {/* Three Images Section - 6.png, 7.png, 8.png */}
        <section className="three-images-section">
          <div className="three-images-container">
            <div className="image-item">
              <img src={img6} alt="Agricultural Innovation" />
            </div>
            <div className="image-item">
              <img src={img7} alt="Modern Farming" />
            </div>
            <div className="image-item">
              <img src={img8} alt="Sustainable Agriculture" />
            </div>
          </div>
        </section>

        {/* Final Landing Image Section */}
        <section className="final-landing-section">
          <div className="final-landing-container">
            <img src={landingImg} alt="Agricultural Landscape" className="final-landing-image" />
            <div className="final-overlay">
              <h2 className="final-title">Join the Agricultural Revolution Today!</h2>
              <div className="final-cta">
                <input type="email" placeholder="Email address" className="email-input" />
                <button className="subscribe-btn">Subscribe ↗</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-icon">S</div>
              <span className="footer-name">Synopsis</span>
            </div>
          </div>
          
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Synopsis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;