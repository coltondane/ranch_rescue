// component controlling a donation popup window 
import React, { useState, useEffect } from 'react';
import '../style/popup.css';

const Popup = () => {
    // State variables to control the popup
    const [showPopup, setShowPopup] = useState(false);
    const [donorName, setDonorName] = useState('');
    const [donationAmount, setDonationAmount] = useState(0);

    // Function to generate a random name that will be gathered from the patreon account
    const getRandomName = () => {
        const names = ['John', 'Alice', 'Bob', 'Emily', 'Charlie', 'Eva'];
        return names[Math.floor(Math.random() * names.length)];
    };

    // Function to generate a random amount between 1 and 100
    const getRandomAmount = () => {
        return Math.floor(Math.random() * 100) + 1;
    };

    useEffect(() => {
        // Generate a random time
        const randomTime = (Math.floor(Math.random() * 6) + 5) * 1000; 

        // Display the popup after the random time
        const timeout = setTimeout(() => {
        const name = getRandomName();
        const amount = getRandomAmount();
        setDonorName(name);
        setDonationAmount(amount);
        setShowPopup(true);

        // Hide the popup after 5 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 5000);
        }, randomTime);

        return () => clearTimeout(timeout);
    }, []);

    console.log('Window rendered');

    return (
        <div className={`popup-container ${showPopup ? 'show' : ''}`}>
        <div className="popup-content">
            <span>{donorName} donated ${donationAmount}!</span>
            <a href="donation-page.html">Click here to donate</a>
        </div>
        </div>
    );
};

export default Popup;
