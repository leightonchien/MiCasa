import React from 'react';
import './App.css';
import DankMemes from "./Components/DankMemes";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import MoreDeets from "./Components/MoreDeets";
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
          <Route path="/features" component={Home}>
              <Features />
          </Route>
          <Route path="/map" component={Map}>
            <Pricing />
          </Route>
          <Route path="/deets" component={Map}>
            <MoreDeets />
          </Route>
          <Route path="/dankmemes" component={Favourites}>
            <DankMemes />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;