import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TemplateRenderer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/service')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const propertyArray = [];
  for (const key in data.service) {
    const isEmpty = Object.keys(data).length === 0;
    if (!isEmpty) {
        if (data.service.hasOwnProperty(key)) {
            propertyArray.push({ key, value: data.service[key] });
        }
    }
  }
  console.log(propertyArray);
  return (
    <div className="row">
        {propertyArray.map(item => (
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div class="icon"><i class="bi bi-briefcase"></i></div>
            <h4 class="title"><a href="">{item.value.name}</a></h4>
            <p class="description">
              {item.value.description}
            </p>
          </div>
        ))}
    </div>
  );

  
};

export default TemplateRenderer;
