import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ranchLogo from "./assets/web_images/ranchLogo.jpg";
import Popup from "./components/Popup.jsx";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery.jsx";
import ContactUs from "./pages/ContactUs";
import Donate from "./pages/Donate";

function App() {
  // Set default page state to 'Home'
  const [currentPage, setCurrentPage] = useState("Home");

  // Set the initial page to 'Home' when the component mounts
  useEffect(() => {
    setCurrentPage("Home");
  }, []);
  return (
    <Router>
      <div className="rescue-app">
        <header className="header-container">
          <h1 className="name">
            <img src={ranchLogo} alt="ranch logo" className="logo" />
            Lily's Ranch and Rescue
          </h1>
          <nav className="navigation">
            <ul>
              <Link to="/" className="link-style">
                <button className="home-btn">Home</button>
              </Link>
              <Link to="/about" className="link-style">
                <button className="about-btn">About Us</button>
              </Link>
              <Link to="/gallery" className="link-style">
                <button className="gallery-btn">Gallery</button>
              </Link>
              <Link to="/contact" className="link-style">
                <button className="contact-btn">Contact Us</button>
              </Link>
              <Link to="/donate" className="link-style">
                <button className="donate-btn">Donate</button>
              </Link>
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
            <a
              href="https://www.facebook.com/lilysranchandrescue/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.patreon.com/lilysranchandrescue?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-patreon"></i>
            </a>
            <a
              href="https://www.tiktok.com/@lilysranchandrescue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.instagram.com/lilysranchandrescue/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
