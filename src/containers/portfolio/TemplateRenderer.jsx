import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TemplateRenderer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/protfolio')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const propertyArray = [];
  for (const key in data.protfolio) {
    const isEmpty = Object.keys(data).length === 0;
    if (!isEmpty) {
        if (data.protfolio.hasOwnProperty(key)) {
            propertyArray.push({ key, value: data.protfolio[key] });
        }
    }
  }
  console.log(propertyArray);
  return (
    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
        {propertyArray.map(item => (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app mask text-light d-flex justify-content-center flex-column text-center" key={item.key}>
            <div className="portfolio-wrap">
            <img src={item.value.images[0]} className="img-fluid" alt=""></img>
            <div className="portfolio-links justify-content-center">
                <a href={item.value.images[0]} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                  <i className="bx bx-plus"></i>
                  <button class="btn">
                    <span>view</span>
                    <span class="ripple"></span>
                  </button>
                </a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i>
                <button class="btn">
                  <span>Details</span>
                  <span class="ripple"></span>
                </button></a>
            </div>
            </div>
        </div>
        ))}
    </div>
  );

  
};

export default TemplateRenderer;
