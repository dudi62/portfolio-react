import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import AOS from 'aos';
import Typed from 'typed.js';
import 'aos/dist/aos.css'; // Import AOS animations
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './style.css';
import banner from '../assets/rick-j-brown-OlyjFqrtPGo-unsplash.jpg';

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 100,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    // Initialize Typed.js
    new Typed('.typed', {
      strings: ['Engineer', 'Developer',],
      typeSpeed: 10,
      backSpeed: 10,
      loop: true,
    });
  }, []);

  return (
    <Element name="home" className="home-section first-page" style={{ backgroundImage: `url(${banner})`}}>
      <div id="hero" className="d-flex flex-column justify-content-center align-items-center grid-container">
        <div className="hero-container" data-aos="fade-in">
          <h1 className="text-center" color="white">Tomasz Dudek</h1>
          <p className="text-center">I'm <span className="typed" data-typed-items="Engineer, Developer"></span></p>
        </div>
      </div>
    </Element>
  );
};

export default Home;
