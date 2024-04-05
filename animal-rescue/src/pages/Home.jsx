// HomePage.js
import React from 'react';
import '../style/home.css';
import { Container, Row, Col } from 'react-bootstrap';
import horsesImg from '../assets/horses.jpeg';

const HomePage = () => {
    return (
        <div className="page-content">
          <div className="grid-container">
            <div className="grid-item text">
              {/* Left column for text */}
              <h2>Heading</h2>
              <p>This is the text content.</p>
            </div>
            <div className="grid-item image">
              <img src={horsesImg} alt="Horses" />
            </div>
          </div>
        </div>
      );
}

export default HomePage;
