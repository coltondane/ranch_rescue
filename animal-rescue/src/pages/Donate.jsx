// DonationsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';

import lilyImg from '../assets/web_images/lily2.jpeg';
import pigletImg from '../assets/web_images/piglet.jpeg';
import placeHolderImg from '../assets/pony.png';
import mapleImg from '../assets/web_images/Maple.jpeg';
import turboImg from '../assets/gallery_images/Turbo&Maple.jpeg';
import bubbaImg from '../assets/gallery_images/hugepig.jpeg';
import '../style/donation.css';

function DisplayAnimals() {
       const animals = [
        {
            id: 1,
            name: 'Lily',
            image: lilyImg,
            description: 'Lily is a miniature pony-donkey cross who was rescued from a feedlot as a filly. She is full of spice and after spending her first few years with us at our rescue, she has lovingly found her forever home with a family in Colorado.'
        },
        {
            id: 2,
            name: 'Maple',
            image: mapleImg,
            description: 'Maple and turbos story: My friend sent me a text after posting on a horse rescue FB  to save these 2. We intercepted them before they went to the horse auction. Maple the mom went on to training after raising turbo and turned into a phenomenal horse. She sold for a large amount of money and living the perfect life as a dressage horse.'
        },
        {
            id: 3,
            name: 'Turbo',
            image: turboImg,
            description: 'When rescued, the baby was only a couple weeks old and could not eat because he was bitten by a rattle snake on his tongue. Our vet met the trailer at our property to determine if we could save him. Mom was unhandled making this difficult. Our vet was amazing and with the care and vetting Turbo fully recovered. He continued to struggle with health issues however. When he went to training he got bit by a spider requiring a very long battle to recover. He also had under developed stifle joints which required surgery.    He currently lives at our rescue/sanctuary living a wonderful life.'
        },
        {
            id: 4,
            name: 'Bubba',
            image: bubbaImg,
            description: "Meet Bubba, we rescued him from neglect in Eastern Kentucky. He lived in the corner of a room in the house and absolute horrid conditions. Rescuing him was tough. He's in pain, very aggressive because of his pain and the family he lived with were very hard to work with. We got him home, got him unloaded in his new area and the next day he had a seizure and must've passed out out in the sun burning himself and getting heat stroke. All in the process of us moving from our old farm to the new farm, so he was not looked at for about two hours, we came home to him nonresponsive and a temp of 106. We knew we had minutes to save his life for an amazing vet. She dropped everything and headed over."
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
              <Link to="https://www.patreon.com/lilysranchandrescue?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"  target='_blank' className="link-style">
                <button className="patreon-btn">Donate Now</button>
              </Link>
            </ul>
            <p>
              Every animal has a story to tell, and here, we invite you to discover the inspiring stories of resilience, courage, and love. From abandoned and neglected animals to those facing life-threatening conditions, our dedicated team works tirelessly to provide them with a second chance at life.
            </p>
          </div>
          <div className='success-cards'>
            <h1>Stories From the Ranch</h1>
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
