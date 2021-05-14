import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";

 import LocationMarker from './LocationMarker'
 //import "./map.css";

const Map = ({ center, zoom }) => {

  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    Promise.all([
      axios.get("/api/properties")
     ]).then((all) => {
       console.log('all', all);
       setProperties(all[0].data);
      // setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  },[]);

  // console.log('properties', properties);

  const locationMarkers = properties.map((property) => {
    // console.log('property', property);
    // console.log('type of', typeof property.latitude);
    return (<LocationMarker lat={property.latitude} lng={property.longitude}/>)
  })

  // Get data through useEffect promise request. 
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '80vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDxCqEWrgL6SHTrAJx22WSlr3Nl3owXo-c'}}
        defaultCenter={ center }
        defaultZoom={ zoom }
        onClick={(event) => {
          console.log(event);
        }}
      >
        {/* Map through the data, and render multiple <LocationMarker/> */}
        {/* <LocationMarker lat={45.33} lng={-122.33}/> */}
        {locationMarkers}
      </GoogleMapReact>
    </div>
  );
}
  Map.defaultProps = {
    center: {
      lat: 49.282730,
      lng: -123.120735
    },
    zoom: 14
  };



export default Map;