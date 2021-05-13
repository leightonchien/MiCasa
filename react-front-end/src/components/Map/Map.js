import React from 'react';
import GoogleMapReact from 'google-map-react';


 import LocationMarker from './LocationMarker'

const Map = ({ center, zoom }) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDxCqEWrgL6SHTrAJx22WSlr3Nl3owXo-c'}}
        defaultCenter={ center }
        defaultZoom={ zoom }
        onClick={(event) => {
          console.log(event);
        }}
      >
        <LocationMarker lat={center.lat} lng={center.lng}/>
      </GoogleMapReact>
    </div>
  );
}
  Map.defaultProps = {
    center: {
      lat: 49.282730,
      lng: -123.120735
    },
    zoom: 7
  };



export default Map;