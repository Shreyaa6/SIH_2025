import React from 'react';
import './style.css';
import bgImage from '../assets/landing.png';

function Landing() {
  return (
    <div className="landing" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <nav className="navbar">
          <div className="brand">
            <div className="brand-icon">S</div>
            <span className="brand-name">Synopsis</span>
          </div>
          <div className="nav-center">
            <ul className="nav-group">
              <li className="nav-item active"><a href="#home"><span className="home-dot">⌂</span> Home</a></li>
              <li className="nav-item"><a href="#about">About Us</a></li>
              <li className="nav-item"><a href="#reviews">Reviews</a></li>
              <li className="nav-item"><a href="#products">Products</a></li>
              <li className="nav-item"><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="nav-actions">
            <a className="login" href="#signin">Sign In</a>
            <a className="signup outline" href="#signup">Sign up Free</a>
          </div>
        </nav>

        <main className="hero">
          {/* <div className="eyebrow">New features available</div> */}
          <h1 className="title">Your Guide to Modern Agriculture</h1>
          <p className="subtitle">
            Explore the future of agriculture with us. Discover cutting-edge
            insights, practical tips, and the latest trends in modern farming.
          </p>
          <div className="hero-ctas">
            <a href="#get-started" className="btn primary">
              Getting Started
              <span className="arrow">→</span>
            </a>
            <a href="#our-services" className="btn secondary">Our Services</a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Landing;

