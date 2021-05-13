import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Image } from 'react-bootstrap';

import placeholderImage from '../assets/calgary.jpg';
import placeholderImage1 from '../assets/chicago.jpg';
import placeholderImage2 from '../assets/vancouver.jpg';
import placeholderImage3 from '../assets/newyork.jpg';

import './Home.css'

const Home = () => {
    return(    
        
    <div>
        <div>
            <p>Test</p>
        </div>
        <div class="gallery">
            <figure class="gallery__item gallery__item--1">
            <img src={placeholderImage} class="gallery__img" alt="Image 1"/>
            </figure>
            <figure class="gallery__item gallery__item--2">
            <img src={placeholderImage1} class="gallery__img" alt="Image 1"/>
            </figure>
           
            <figure class="gallery__item gallery__item--1b">
            <img src={placeholderImage} class="gallery__img" alt="Image 1"/>
            </figure>
            <figure class="gallery__item gallery__item--2b">
            <img src={placeholderImage1} class="gallery__img" alt="Image 1"/>
            </figure>
            </div>
    </div>    
    )
}

export default Home