import React from 'react';
import './service.css';
import axios from 'axios'; // Uncomment if using Axios
import TemplateRenderer from './TemplateRenderer';

const Service = () => {
    return (
        <section id="services" class="services">
            <div class="container">
                <div class="section-title">
                    <h2>Services</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <TemplateRenderer />
            </div>
        </section>
    )
  }
  
  export default Service