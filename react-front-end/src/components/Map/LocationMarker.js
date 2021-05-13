import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <HomeIcon className="location-icon" />
        </div>
    )
};

export default LocationMarker;