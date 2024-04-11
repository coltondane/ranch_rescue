// HomePage.js
import React from 'react';
import '../style/home.css';
import { Container, Row, Col } from 'react-bootstrap';

function HomePage() {
    return (
        <Container className='content'>
            <Row className='intro'>
                <Col>
                    <h1>Rescue, Rehabilitate, Rehome</h1>
                    <p>
                        Lily's Ranch and Rescue is a 501(c)(3) Animal Sanctuary that was formerly based in Colorado. We are now located in the beautiful blue grass valleys of Kentucky. Our new location provides our current animal residents  with more land to roam freely and allows us to intake more animals in need. Lily's Ranch and Rescue focuses on the rescue, rehabilitation and re-homing of all types of farm animals. Here at Lily’s Ranch & Rescue, we provide specialized veterinary care, farrier services, custom feed, and most importantly, the tender love for all of our animals.
                    </p>
                    <p>
                        Please visit our other pages to learn more about our mission, our animals, and how you can help us continue to provide a safe haven for animals in need.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;
