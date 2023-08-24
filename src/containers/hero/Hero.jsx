import React from 'react';
import './hero.css';

const Hero = () => {
    let textLength = 0;
    let text = 'What follows is Lorem ipsum translated to English: But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great ...';


    function type() {
        let textChar = text.charAt(textLength++);
        let paragraph = document.getElementById("typed");
        let charElement = document.createTextNode(textChar);
        paragraph.appendChild(charElement);
        if(textLength < text.length+1) {
            setTimeout(() => {
                type();
              }, 50);
        } else {
            text = '';
        }
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        type();
    });
  return (
    <section id="hero" className="d-flex flex-column ">
      <div className="hero-container aos-init aos-animate" data-aos="fade-in">
        <h1>Alex Smith</h1>
        <div id = "typed" className = "typed"></div>
      </div>
    </section>
    )};

export default Hero;
