import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Image } from 'react-bootstrap';

import placeholderImage from '../assets/calgary.jpg';
import placeholderImage1 from '../assets/chicago.jpg';
import placeholderImage2 from '../assets/vancouver.jpg';
import placeholderImage3 from '../assets/newyork.jpg';
import placeholderImage4 from '../assets/1.png';
import placeholderImage5 from '../assets/2.png';
import placeholderImage6 from '../assets/3.png';

import './Home.css'

const Home = () => {
    return(   
    <div>
        <div>
            <p id="mid-text"><strong>Popular Cities in Canada</strong></p>
        </div>
        <div class="gallery">
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
        <div>
        <div>
            <p id="mid-text"><strong>How MiCasa works and helps you!</strong></p>
        </div>
        <div class="gallery">
            <figure class="info__item info__item--1">
            <img src={placeholderImage4} class="info__img" alt="Image 1"/>
            </figure>
            <figure class="info__item info__item--2">
            <img src={placeholderImage5} class="info__img" alt="Image 1"/>
            </figure>
            <figure class="info__item info__item--3">
            <img src={placeholderImage6} class="info__img" alt="Image 1"/>
            </figure>
            </div>
        </div> 
    </div>    
    )
}

export default Home