import React from 'react';

import placeholderImage from '../assets/calgary.jpg';
import placeholderImage1 from '../assets/chicago.jpg';
import placeholderImage2 from '../assets/vancouver.jpg';
import placeholderImage3 from '../assets/newyork.jpg';

// import './CityImages.css'

function CityImagesList() {
  return (
    <div className="CityImagesList">
        <div>
        <div>
            <p id="mid-text"><strong>How MiCasa works and helps you!</strong></p>
        </div>
        <div class="gallery">
            <p id="test">TestTestTestTestTestTestTest</p>
            <figure class="gallery__item gallery__item--1">
            <img src={placeholderImage} class="gallery__img" alt="Image 1"/>
            </figure>
            <figure class="gallery__item gallery__item--2">
            <img src={placeholderImage1} class="gallery__img" alt="Image 1"/>
            </figure>
           
            <figure class="gallery__item gallery__item--1b">
            <img src={placeholderImage2} class="gallery__img" alt="Image 1"/>
            </figure>
            <figure class="gallery__item gallery__item--2b">
            <img src={placeholderImage3} class="gallery__img" alt="Image 1"/>
            </figure>
            </div>
    </div> 
    </div>
  )
}
export default CityImagesList