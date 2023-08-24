import React from 'react';
import { Footer,Blog,WhatGPT3,Possibility, Header, Hero, About, Resume, Portfolio, Service, Contact  } from './containers';
import { Brand,CTA,Navbar,Feature } from './components';
// import './App.css';

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>iPortfolio Bootstrap Template - Index</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        {/* Favicons */}
        <link rel="icon" href="assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png" />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

        {/* Vendor CSS Files */}
        <link rel="stylesheet" href="assets/vendor/aos/aos.css" />
        <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="assets/vendor/boxicons/css/boxicons.min.css" />
        <link rel="stylesheet" href="assets/vendor/glightbox/css/glightbox.min.css" />
        <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css" />

        {/* Template Main CSS File */}
        <link rel="stylesheet" href="assets/css/style.css" />

        {/* =======================================================
        * Template Name: iPortfolio
        * Updated: Jul 27 2023 with Bootstrap v5.3.1
        * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
        * Author: BootstrapMade.com
        * License: https://bootstrapmade.com/license/
        ======================================================== */}
      </head>
      <body>
        <div className='App'>
          <Header />
          <Hero />
          <About />
          <Resume />
          <Portfolio />
          <Service />
          <Footer />
          <Contact />
        </div>
      </body>
    </html>
  )
}
    
export default App