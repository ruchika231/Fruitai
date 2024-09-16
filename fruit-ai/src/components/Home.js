// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Fruit.ai</h1>
      <div className="services">
        <Link to="/chatbot" className="service-card">Chatbot</Link>
        <Link to="/translator" className="service-card">Translator</Link>
        <Link to="/faq" className="service-card">FAQ</Link>
        <Link to="/about" className="service-card">About</Link>
      </div>
    </div>
  );
};

export default Home;

