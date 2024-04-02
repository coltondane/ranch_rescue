// DonationsPage.js
import React from 'react';

const DonationsPage = () => {
  return (
    <div>
      <h2>Donate to Support Our Cause</h2>
      <p>Your donations help us provide care and support for animals in need.</p>
      <form>
        <label htmlFor="amount">Donation Amount:</label>
        <input type="number" id="amount" name="amount" min="1" placeholder="Enter amount" required />
        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
}

export default DonationsPage;
