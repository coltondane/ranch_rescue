// AboutPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/aboutUs.css';
import horsesImg from '../assets/horses.jpeg';
import lilyImg from '../assets/lily.jpg';


const AboutPage = () => {
  return (
    <Container className='content'>
      <Row className='title-lily'>
        <Col>
          <h1 className='meet'>Meet Lily, Our First</h1>
        </Col>
      </Row>
      <Row className='summary-lily'>
        <Col>
          <p>
            Every great story starts somewhere, and ours starts with a miniature pony-donkey cross named Lily. Rescued from a feedlot as a filly, she was the first of many rescues to grace our farm. Lily is full of spice and after spending her first few years with us at our rescue, she has lovingly found her forever home with a family in Colorado. It was love at first sight for Laurie and Lily. It was Lily who inspired Laurie to not only take in animals in need, but also find homes for animals who have a chance at finding families who would love them with all of their hearts. Rehoming animals allows us to intake new rescues, and those who cannot find a home due to health conditions or other complications will always have a safe, forever home here at Lily's Ranch and Rescue.
          </p>
        </Col>
        <Col>
          <img src={lilyImg} alt='horses' className='lily' />
        </Col>
      </Row>
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
