import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 7
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDxCqEWrgL6SHTrAJx22WSlr3Nl3owXo-c'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-123.120735}
            lng={49.282730}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;