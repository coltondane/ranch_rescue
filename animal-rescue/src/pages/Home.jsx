// HomePage.js
import React from 'react';
import '../style/home.css';
import { Container, Row, Col } from 'react-bootstrap';
import horsesImg from '../assets/horses.jpeg';

const HomePage = () => {
    return (
        <Container className='content'>
            <Row>
                <Col>
                    <h1>Welcome to Lily's Ranch and Rescue</h1>
                    <p>
                        We are a non-profit organization that rescues and rehabilitates horses and other animals. We are dedicated to providing a safe and loving environment for animals in need. Our mission is to rescue, rehabilitate, and rehome animals in need. We believe that all animals deserve a second chance at life and we are committed to helping them find their forever homes.
                    </p>
                    <p>
                        We are a non-profit organization that rescues and rehabilitates horses and other animals. We are dedicated to providing a safe and loving environment for animals in need. Our mission is to rescue, rehabilitate, and rehome animals in need. We believe that all animals deserve a second chance at life and we are committed to helping them find their forever homes.
                    </p>
                    
                </Col>
                <Col>
                    {/* <img src={horsesImg} alt="horses" className="home-img" /> */}
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;
