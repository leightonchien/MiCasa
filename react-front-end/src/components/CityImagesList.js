import CityImagesSpace from './CityImagesSpace.js';
import './CityImages.css'
import React from 'react';

function CityImagesList() {
  return (
    <div className="CityImagesList">
      <CityImagesSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <CityImagesSpace
        name="100 Pine Street"
        address="100 Pine St."
        image="100-pine.jpg"
      />
      <CityImagesSpace
        name="101 California Street"
        address="101 California"
        image="101-california.jpg"
      />
      <CityImagesSpace
        name="343 Sansome Roof Garden"
        address="343 Sansome St."
        image="343-sansome-roof-garden.jpg"
      />
      <CityImagesSpace
        name="525 Market Street Plaza"
        address="525 Market St."
        image="525-market-street-plaza.jpg"
      />
      <CityImagesSpace
        name="Citigroup Center"
        address="1 Sansome St."
        image="citigroup-center.jpg"
      />
    </div>
  )
}
export default CityImagesList