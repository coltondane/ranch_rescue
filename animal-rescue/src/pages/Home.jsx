// HomePage.js
import React from 'react';
import '../style/home.css';


const HomePage = () => {
  return (
    <div className='content'>
      <div className='introduction'>
        <h1>Rescue, Rehabilitate, Rehome</h1>
        <p>
          Lily's Ranch and Rescue is a 501(c)(3) Animal Sanctuary that was formerly based in Colorado. We are now located in the beautiful blue grass valleys of Kentucky. Our new location provides our current animal residents  with more land to roam freely and allows us to intake more animals in need. Lily's Ranch and Rescue focuses on the rescue, rehabilitation and re-homing of all types of farm animals. Here at Lily’s Ranch & Rescue, we provide specialized veterinary care, farrier services, custom feed, and most importantly, the tender love for all of our animals.
        </p>
     </div>
     <div className='card-content'>
        <h2>Why We Do What We Do</h2>
        <p>
          To make a long story short, the animals are our reason. We have made the choice to be the voice for the voiceless. These animals who are neglected, abused, and pushed aside who are rescued by us remind us just how important our role is to be their voice. To be the ones to speak up on their behalf and educate others on the traumatic abuse that occurs to a number of animals daily. Not only is it important to us to be their voices, but it is equally as important to us that we show the animals the love they never received. At Lily's Ranch and Rescue, we pride ourselves on the healing love and care that we provide each animal that joins us. We are here to show them that they are loved, they are safe, and they are home.
        </p>
     </div>
    </div>
  );
}

export default HomePage;
