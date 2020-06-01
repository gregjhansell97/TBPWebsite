import React, { Component } from 'react';

// reactstrap
import { Navbar, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// inhouse
import About from "./About";
import Events from "./Events";
import Members from "./Members";
import Officers from "./Officers";

class App extends Component {
    render() {
        // retrieve about html??
        return (
            <Router>
                <Switch>
                    <Route path="/events">
                        <Events />
                    </Route>
                    <Route path="/members">
                        <Members />
                    </Route>
                    <Route path="/officers">
                        <Officers />
                    </Route>
                    <Route path="/">
                        <About 
                            html= "<p1>summary of everything...</p1>"/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
