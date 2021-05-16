import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";



const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    const { userId } = useParams();
    const history = useHistory();

    useEffect(() => {
      Promise.all([
        axios.get("/api/favourites")
       ]).then((all) => {
         console.log('all', all);
         setFavourites(all[0].data);
       
      });
    },[]);
    const favouritesProperty = history.map((favourites) => {
        
        return (<Favourites />)
      })

    return(
        <div className="App">
            <h1>Favourites</h1>
        </div>
    )
}

export default Favourites;