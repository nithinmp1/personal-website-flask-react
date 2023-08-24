import React, { useState, useEffect }  from 'react';
import './portfolio.css';
import axios from 'axios'; // Uncomment if using Axios
import TemplateRenderer from './TemplateRenderer';

const Portfolio = () => {
  

  function listPortFolio() {
    function setData(response) {
      // console.log(response);
      return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">1
            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""></img>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      );
    }
    
    axios.get('http://127.0.0.1:5000/programming_languages', {
      referrerPolicy: 'strict-origin-when-cross-origin'
    })
    .then(response => {
      let data = setData(response);
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

          <TemplateRenderer />
        
      </div>
    </section>
  )
}

export default Portfolio