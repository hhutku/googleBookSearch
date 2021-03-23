import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Shelf from "./pages/Shelf";
import NotFound from "./pages/NotFound";
import GoogleState from "./context/google/GoogleState";
import ShelfState from "./context/shelf/ShelfState";
import Nav from "./components/Nav/Nav"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import { Container } from 'react-bootstrap'


function App() {
  return (
    <GoogleState>
      <ShelfState>
        <Router>
          <Nav />
          <Container fluid>
            <Jumbotron />
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/saved" component={Shelf} />
                <Route component={NotFound} />
              </Switch>
            </div>

          </Container>
        </Router>
      </ShelfState>
    </GoogleState>
  );
}


export default App;
