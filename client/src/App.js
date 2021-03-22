import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NotFound from "./pages/NotFound";
import GoogleState from "./context/google/GoogleState";
import Nav from "./components/Nav/Nav"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import { Container } from 'react-bootstrap'


function App() {
  return (
    <GoogleState>
      <Router>
        <Nav />
        <Container fluid>
          <Jumbotron />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NotFound} />
            </Switch>
          </div>

        </Container>
      </Router>
    </GoogleState>
  );
}


export default App;
