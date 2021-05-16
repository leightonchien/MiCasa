import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Infobox from './Infobox';
//import axios from axios;



const LocationMarker = ({ lat, lng, info }) => {

    const [show, setshow] = useState(false);
    
    const onClick = function () {
        setshow(!show)
    }



    return (

        <div className="location-marker" onClick={onClick}>
            <HomeIcon  className="location-icon" />
            {show&&<Infobox info={info}/> }
        </div>
    )
};

export default LocationMarker;