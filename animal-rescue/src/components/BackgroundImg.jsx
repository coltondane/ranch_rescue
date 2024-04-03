// component to display a background image that scrolls with the page content
import React from 'react';
import './BackgroundScrollPage.css'; // Import your CSS file

const BackgroundScrollPage = () => {
  return (
    <div className="background-scroll-container">
      <div className="background-image"></div>
      <div className="content">
        <h1>This is the content that scrolls over the background image</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna quis nisi eleifend, quis condimentum libero laoreet. Phasellus eget tortor quis nulla luctus gravida. Vestibulum tincidunt mauris non justo finibus, ut malesuada magna feugiat. Duis accumsan ex vel lectus efficitur, eget tincidunt purus blandit. Integer sit amet eleifend turpis.</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export default BackgroundScrollPage;
