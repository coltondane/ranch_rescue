// AboutPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/aboutUs.css';
import horsesImg from '../assets/horses.jpeg';
import lilyImg from '../assets/lily.jpg';
import donkeys from '../assets/donkeys.jpg';
import pony from '../assets/pony2.jpeg';
import piglet from '../assets/piglet.jpeg';
import fam from '../assets/laurie+trey.jpg';


function AboutPage() {
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
          Every great story starts somewhere, and ours starts with a miniature mule named Lily. Rescued from a feedlot as a filly, she was the first of many rescues to grace our farm. Lily is full of spice and after spending her first few years with us at our rescue, she has lovingly found her forever home with a family in Colorado. It was love at first sight for Laurie and Lily. It was Lily who inspired Laurie to not only take in animals in need, but also find homes for animals who have a chance at finding families who would love them with all of their hearts. Rehoming animals allows us to intake new rescues, and those who cannot find a home due to health conditions or other complications will always have a safe, forever home here at Lily's Ranch and Rescue.
          </p>
        </Col>
        <Col>
          <img src={lilyImg} alt='horses' className='lily' />
        </Col>
      </Row>
      <Row className='reason'>
        <Col>
          <img src={horsesImg} alt='horses' className='horses-img' />
        </Col>
        <Col>
          <h2 className='why-title'>Why We Do What We Do</h2>
          <p>
            To make a long story short, the animals are our reason. We have made the choice to be the voice for the voiceless. These animals who are neglected, abused, and pushed aside who are rescued by us remind us just how important our role is to be their voice. To be the ones to speak up on their behalf and educate others on the traumatic abuse that occurs to a number of animals daily.
          </p>
          <p>
              Not only is it important to us to be their voices, but it is equally as important to us that we show the animals the love they never received. At Lily's Ranch and Rescue, we pride ourselves on the healing love and care that we provide each animal that joins us.
          </p>
          <img src={donkeys} alt="donkeys" className='donkeys-img'/>
        </Col>
      </Row>
      <Row className='mission'>
        <Col>
          <img src={pony} alt="pony-img" className='pony-img'/>
        </Col>
        <Col className='mission-desc'>
        <h2>Our Mission</h2>
          <p>
            At Lily's Ranch and Rescue, our mission is to provide the highest level of respect, love, and care to each animal that is rescued by us. Through rehabilitation and continuous work with each animal, our goal is to rehome or provide a soft landing to every animal that crosses our path.
          </p>
          <p>
            We educate about animal abuse and neglect to not only the community we reside in, but world-wide. Through our rescue, we aim to raise awareness around the number of ways that all animals, especially equine, are treated globally and to help fight for stricter laws around the neglect, abuse, and mistreatment of animals.
          </p>
        </Col>
        <Col>
          <img src={piglet} alt="piglet-img" className='piglet-img'/>
        </Col>
      </Row>
      <Row className='founders'>
        <Col className='founder-content'>
          <h1>Meet the Founders</h1>
          <p>
            Lily's Ranch & Rescue was founded by Trey and Laurie Beattie. They have been fostering and rehabilitating animals for over 10 years but recently began Lily's Ranch and Rescue in 2017. Through Laurie's passion and love for animals, she has rescued over 300 animals and that number continues to grow.
          </p>
          <p>
            Trey and Laurie were residing in Colorado when they  initially founded Lily's Ranch and Rescue. In the Summer of 2022,  made the move across the country to Kentucky where a new chapter for the rescue was to start.  Our vision is to help rescues and shelters in our area help with spays and neuters and minor surgeries by building a surgery center on our property and funding it so more lives can be saved.  In our area there is no large animal surgery center.  A horse needing colic surgery for example  would have to travel 5-6 hours to the nearest facility. There are so many. At first, we didn’t know why Kentucky was on the radar but now that we have lived there two years we see why we are needed. 
          </p>
          <p>
            At Lily's Ranch and Rescue, equine animals are our specialty, but we do not turn away any animal that is in need of our help. We also never turn away any volunteer help! Contact us if you would like to learn about our volunteer opportunities.
          </p>
        </Col>
        <Col>
          <img src={fam} alt='fam-pic' className='fam-pic' />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
