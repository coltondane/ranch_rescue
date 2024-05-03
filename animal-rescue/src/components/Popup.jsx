// component to display a popup when a donation is made
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
        // generate and show the popup
        const showNewPopup = () => {
            const name = getRandomName();
            const amount = getRandomAmount();
            setDonorName(name);
            setDonationAmount(amount);
            setShowPopup(true);

            // Hide the popup after 5 seconds
            setTimeout(() => {
                setShowPopup(false);
            }, 5000);
        };

        // generate a random time between 2 and 10 minutes
        const getRandomTime = () => {
            // return Math.floor(Math.random() * 6 + 5) * 1000;
            return (Math.floor(Math.random() * 9) + 2) * 60000;
        };

        // Show the initial popup
        showNewPopup();

        // Set up interval to show new popups
        const interval = setInterval(() => {
            showNewPopup();
        }, getRandomTime());

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Render the popup if showPopup is true
    return (
        <div className={`popup-container ${showPopup ? 'show' : ''}`}>
            <div className="popup-content">
                <span>{donorName} donated ${donationAmount}!</span>
                <a href="https://www.patreon.com/lilysranchandrescue?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" target='_blank'>Click here to donate</a>
            </div>
        </div>
    );
};

export default Popup;
