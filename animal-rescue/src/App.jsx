// root imports
import {useState} from 'react';
import "./style/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import pages and other 
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Animals from './pages/Animals';
import ContactUs from './pages/ContactUs';
import Donate from './pages/Donate';

import ranchLogo from './assets/ranchLogo.jpg';

// function to set the current page
function App() {
  // set default state along with state setter
  const [currentPage, setCurrentPage] = useState('Home');

  const renderHome = () => {
      setCurrentPage('Home');
  };
  const renderAboutUs = () => {
      setCurrentPage('About Us');
  }
  const renderDonate = () => {
      setCurrentPage('Donate');
  };
  const renderContactUs = () => {
      setCurrentPage('Contact Us');
  };
  const renderAnimals = () => {
      setCurrentPage('Animals');
  };

  return (
    <div className="rescue-app">
      <header className="header-container">
        <h1 className='name'>
          <img src={ranchLogo} alt='ranch logo' className='logo' />
          Lily's Ranch and Rescue
        </h1>
        <nav className="navigation">
          <ul>
            <button onClick={renderHome} className="home-btn">
              Home
            </button>
            <button onClick={renderAboutUs} className="about-btn">
              About Us
            </button>
            <button onClick={renderAnimals} className="animals-btn">
              Animals
            </button>
            <button onClick={renderContactUs} className="contact-btn">
              Contact Us
            </button>
            <button onClick={renderDonate} className="donate-btn">
              Donate 
            </button>
          </ul>
        </nav>
      </header>
      <div className="content">
        {currentPage === "Home" && <Home />}
        {currentPage === "About Us" && <AboutUs />}
        {currentPage === "Animals" && <Animals />}
        {currentPage === "Contact Us" && <ContactUs />}
        {currentPage === "Donate" && <Donate />}
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
        </div>
        <p>&copy; 2024 Lily's Ranch and Rescue 501(c)(3)</p>
      </footer>
    </div>
  );
}

export default App;