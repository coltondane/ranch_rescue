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
import shadowImg from '../assets/web_images/shadow_1.jpg';
import snowmanImg from '../assets/web_images/snowman.jpeg';
import b_pImg from '../assets/web_images/b&p.jpeg';
import mama_charoletteImg from '../assets/web_images/mama&char.jpg';
import kevinImg from '../assets/web_images/kevin.jpeg';
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
            name: 'Shadow',
            image: shadowImg,
            description: "Meet shadow, the pitbull that was dropped off at our farm. We weren’t accepting dogs at this time and he was dropped off anyway, this boy has been through a lot. He came to us a very skinny. We found a vet to neuter him right away as we already had six dogs on the property. We fell in love with this boy. Soon after being neutered we noticed a growth on his hind foot. We took him to our vet to find out he had stage for mass cell cancer, we had his leg amputated the following weekend and he started cancer treatment. He was doing phenomenal as a tripod so happy with life. He moved with us to our new property and Kentucky in 2022. Unfortunately, since he was later found out to be a bait dog his PTSD got the best of him. We felt it was in his best interest to let him go and cross the rainbow bridge. We will forever miss this boy."
        },
        {
            id: 6,
            name: 'Snowman',
            image: snowmanImg,
            description: "Meet snowman. We got a call from a neighbor about a pony locked in a neighbors barn feed closet.   We went over to investigate and immediately jumped into action.  He was a body score of 2 living in such a small space in the dark no food no water. And unhandled.  I mentioned to the owners that I had a white mini pony mare  that I would like to breed since he was a stud.  Sure you can have them we did the paperwork and the brand inspection and immediately took him home. Our vet met us the next morning completely shocked he was still alive. he had a good 25 to 30 pounds of sand in his belly since he was eating dirt and manure to survive if you call that surviving. He was immediately vetted and started on a rehab program to get weight back on him safely. He bounced back so quick and became so full of life once he was safe to have his gelding  procedure done. We sent him to CSU since he was a possible high risk due to his previous health.  He loved to be worked and loved making a human happy. We sent him to our Trainer in Wisconsin where he found his forever home with a family. We are so fond of this boy, and so proud of who he became and what he overcame."
        },
        {
            id: 7,
            name: 'Beans & Petunia',
            image: b_pImg,
            description: "Meet beans and petunia, These girls came to us from a hoarding case in Boulder, Colorado. This claim to be a pig sanctuary, but they were massively breeding pigs to help pay for their sanctuary, which is an oxymoron. It was a catch what we could to rescue.   These girls came home with us. It is very unfortunate. The following summer. There was a massive fire in West Boulder County and many of the pigs on that farm perished. We are very grateful for the two we were able to save. These girls made us aware of how much of a rescue need there is for pigs. Since rescuing these two girls, we have rescued 25 more pigs in the last two years. We turn away sadly so many that we just can’t help. It is hard to accept that we can’t help everyone. These girls are our pig mascots "
        },
        {
            id: 8,
            name: 'Mama & Charolette',
            image: mama_charoletteImg,
            description: "Baby Charlotte was born unexpectedly on June 26th 2023. Her mom went into distress during labor and had to be rushed to the vet for a c section where all the other babies didn’t make it. We had to take over care of her full time. Bottle feeding every 2 hrs. She has become such a treasure at the sanctuary. So much personality. She went on 2 horse hauls with us since she had to be fed around the clock. She will be 1 in a couple weeks. You can see more of them in the gallery."
        },
        {
            id: 9,
            name: 'Kevin',
            image: kevinImg,
            description: "Meet Kevin we got a call from law-enforcement in a town in northern Kentucky about a pig who was thrown from a vehicle on the side of the road. He had suffered a broken pelvis, so wasn’t moving around too fast. It took three local law-enforcement to help me get him loaded safely into my vehicle and we hauled him back home to the rescue , we took the following day to our vet to be neutered and fully vetted to make sure he would be okay. It’s taken him several months, but he has made a full recovery and just one of the happiest boys on the rescue. He loves giving kisses and he loves to talk and let the world know he’s doing just fine. "
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
