// DonationsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';

import lilyImg from '../assets/lily.jpg';
import pigletImg from '../assets/piglet.jpeg';
import placeHolderImg from '../assets/pony.png';

import '../style/donation.css';

function DisplayAnimals() {
       const animals = [
        {
            id: 1,
            name: 'Lily',
            image: lilyImg,
            description: 'Lily is a miniature pony-donkey cross who was rescued from a feedlot as a filly. She is full of spice and after spending her first few years with us at our rescue, she has lovingly found her forever home with a family in Colorado.The rest of this is gibberish to test the overflow of the text. Lily is a miniature pony-donkey cross who was rescued from a feedlot as a filly. She is full of spice and after spending her first few years with us at our rescue, she has lovingly found her forever home with a family in Colorado. blah blah blah keep going. talk about how she inspired Laurie to blah blah blah. Rehoming animals allows us to intake new rescues, and those who cannot find a home due to health conditions or other complications will always have a safe, forever home here at Lily\'s Ranch and Rescue.'
        },
        {
            id: 2,
            name: 'Piglet',
            image: pigletImg,
            description: 'Piglet is a pig who was rescued from a factory farm'
        },
        {
            id: 3,
            name: 'Horse',
            image: placeHolderImg,
            description: 'This horse was rescued from a slaughterhouse'
        },
        {
            id: 4,
            name: 'Donkey',
            image: placeHolderImg,
            description: 'This donkey was rescued from a feedlot'
        },
        {
            id: 5,
            name: 'Pony',
            image: placeHolderImg,
            description: 'This pony was rescued from a factory farm'
        },
        {
            id: 6,
            name: 'Cow',
            image: placeHolderImg,
            description: 'This cow was rescued from a dairy farm and is now living out their days at Lily\'s Ranch and Rescue'
        },
        {
            id: 7,
            name: 'Goat',
            image: placeHolderImg,
            description: 'This goat was rescued from a slaughterhouse'
        },
        {
            id: 8,
            name: 'Sheep',
            image: placeHolderImg,
            description: 'This sheep was rescued from a factory farm'
        },
        {
            id: 9,
            name: 'Chicken',
            image: placeHolderImg,
            description: 'This chicken was rescued from a factory farm'
        },
        {
            id: 10,
            name: 'Duck',
            image: placeHolderImg,
            description: 'This duck was rescued from a factory farm'
        }
    ];
    // map over the animals array to create an AnimalCard for each animal
    return (
        <div className='donation-container'>
          <div className='donation-desc'>
            <h1>Your Donation in Action: Supporting Our Animals</h1>
            <p>
              At Lily's Ranch and Rescue, your generous donations play a crucial role in providing essential care and support for our animals. Every contribution goes directly towards ensuring the well-being and happiness of the animals in our care. Here are some of the ways your donation makes a difference:
            </p>
            <ul>
              <li>
                Feeding our Friends: Your donations help purchase high-quality hay, nutritious feed, and supplements to keep our animals healthy and well-fed
              </li>
              <li>
                Veterinary Care: Your support enables us to provide essential medical care, vaccinations, and treatments for our animals
              </li>
              <li>
                Shelter and Comfort: Your donations help maintain safe and comfortable living spaces for our animals, including barns, shelters, and bedding
              </li>
              <li>
                Enrichment and Socialization: Your contributions support activities and programs that promote mental and physical well-being for our animals aiding in their rehabilitation and rehoming.
              </li>
              <Link to="https://www.patreon.com/lilysranchandrescue?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" className="link-style">
                <button className="patreon-btn">Donate Now</button>
              </Link>
            </ul>
            <p>
              Every animal has a story to tell, and here, we invite you to discover the inspiring stories of resilience, courage, and love. From abandoned and neglected animals to those facing life-threatening conditions, our dedicated team works tirelessly to provide them with a second chance at life.
            </p>
          </div>
          <div className='success-cards'>
            <h1>Lily's Success Stories</h1>
            <div className='form-element'>
              {animals.map(animal => (
                  <AnimalCard key={animal.id} name={animal.name} image={animal.image} description={animal.description} />
              ))}
            </div>
          </div>
        </div>
    );
}

export default DisplayAnimals;
