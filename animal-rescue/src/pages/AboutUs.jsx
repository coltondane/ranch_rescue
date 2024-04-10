// AboutPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import '../style/about.css';
import horsesImg from '../assets/horses.jpeg';


const AboutPage = () => {
  return (
    <Container className='content'>
      <Row className='reason'>
        <Col>
          <h2>Why We Do What We Do</h2>
          <p>
              To make a long story short, the animals are our reason. We have made the choice to be the voice for the voiceless. These animals who are neglected, abused, and pushed aside who are rescued by us remind us just how important our role is to be their voice. To be the ones to speak up on their behalf and educate others on the traumatic abuse that occurs to a number of animals daily. 
          </p>
          <p>
              Not only is it important to us to be their voices, but it is equally as important to us that we show the animals the love they never received. At Lily's Ranch and Rescue, we pride ourselves on the healing love and care that we provide each animal that joins us.
          </p>
        </Col>
        <Col>
          <img src={horsesImg} alt='horses' className='img-fluid' />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
