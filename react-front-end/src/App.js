import React, { Component } from "react";
import './App.css';
import CityImagesList from "./Components/CityImagesList.js"
import Favourites from "./Components/Favourites";
import Home from "./Components/Home";
import Map from "./Components/Map";
import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
    constructor() {
      super();
      this.state = {
        name: "React",
        isUserAuthenticated: true
      };
    }

    render() {
          return (
    <div className="App">
        <Router>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route
                exact
                path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/home" /> :
                      <Redirect to="/map" /> 
                    )
                }}
              />
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
    <CityImagesList />
    </div>
    );
  }
}

export default App;