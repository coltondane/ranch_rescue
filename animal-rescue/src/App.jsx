import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./style/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ranchLogo from './assets/ranchLogo.jpg';
import Popup from './components/Popup.jsx';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery.jsx';
import ContactUs from './pages/ContactUs';
import Donate from './pages/Donate';

function App() {
  // Set default page state to 'Home'
  const [currentPage, setCurrentPage] = useState('Home');

  // Set the initial page to 'Home' when the component mounts
  useEffect(() => {
    setCurrentPage('Home');
  }, []);
  return (
    <Router>
      <div className="rescue-app">
        <header className="header-container">
          <h1 className='name'>
            <img src={ranchLogo} alt='ranch logo' className='logo' />
            Lily's Ranch and Rescue
          </h1>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/" className="home-btn">Home</Link>
              </li>
              <li>
                <Link to="/about" className="about-btn">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="gallery-btn">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="contact-btn">Contact Us</Link>
              </li>
              <li>
                <Link to="/donate" className='donate-btn'>Donate</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
        <footer>
          <div>
            <a href="https://www.facebook.com/lilysranchandrescue/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="__" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-patreon"></i>
            </a>
            <a href="https://www.tiktok.com/@lilysranchandrescue" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/lilysranchandrescue/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p>&copy; 2024 Lily's Ranch and Rescue 501(c)(3)</p>
        </footer>
        <Popup />
      </div>
    </Router>
  );
}

export default App;

// // root imports
// import {useState} from 'react';
// import "./style/app.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

// // import popup component
// import Popup from './components/Popup.jsx';

// // import pages and other 
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Gallery from './pages/Gallery.jsx';
// import ContactUs from './pages/ContactUs';
// import Donate from './pages/Donate';

// import ranchLogo from './assets/ranchLogo.jpg';

// // function to set the current page
// function App() {
//   // set default state along with state setter
//   const [currentPage, setCurrentPage] = useState('Home');

//   const renderHome = () => {
//       setCurrentPage('Home');
//   };
//   const renderAboutUs = () => {
//       setCurrentPage('About Us');
//   }
//   const renderDonate = () => {
//       setCurrentPage('Donate');
//   };
//   const renderContactUs = () => {
//       setCurrentPage('Contact Us');
//   };
//   const renderAnimals = () => {
//       setCurrentPage('Animals');
//   };

//   return (
//     <div className="rescue-app">
//       <header className="header-container">
//         <h1 className='name'>
//           <img src={ranchLogo} alt='ranch logo' className='logo' />
//           Lily's Ranch and Rescue
//         </h1>
//         <nav className="navigation">
//           <ul>
//             <button onClick={renderHome} className="home-btn">
//               Home
//             </button>
//             <button onClick={renderAboutUs} className="about-btn">
//               About Us
//             </button>
//             <button onClick={renderAnimals} className="animals-btn">
//               Gallery
//             </button>
//             <button onClick={renderContactUs} className="contact-btn">
//               Contact Us
//             </button>
//             <button onClick={renderDonate} className="donate-btn">
//               Donate 
//             </button>
//           </ul>
//         </nav>
//       </header>
//       <div className="content">
//         {currentPage === "Home" && <Home />}
//         {currentPage === "About Us" && <AboutUs />}
//         {currentPage === "Animals" && <Gallery />}
//         {currentPage === "Contact Us" && <ContactUs />}
//         {currentPage === "Donate" && <Donate />}
//       </div>
//       <footer>
//         <div>
//         <a href="https://www.facebook.com/lilysranchandrescue/" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-facebook"></i>
//         </a>
//         <a href="__" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-patreon"></i>
//         </a>
//         <a href="https://www.tiktok.com/@lilysranchandrescue" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-tiktok"></i>
//         </a>
//         <a href="https://www.instagram.com/lilysranchandrescue/" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-instagram"></i>
//         </a>
//         </div>
//         <p>&copy; 2024 Lily's Ranch and Rescue 501(c)(3)</p>
//       </footer>
//       <Popup />
//     </div>
//   );
// }

// export default App;