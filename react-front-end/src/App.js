import React from 'react';
import './App.css';
import Favourites from "./Components/favourites";
import Home from "./Components/home";
import Map from "./Components/map";
import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/map" component={Map}>
            <Map />
          </Route>
          <Route path="/favourites" component={Favourites}>
            <Favourites />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;