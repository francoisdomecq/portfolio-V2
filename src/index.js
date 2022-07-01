import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import MyWork from './pages/MyWork/MyWork';
import ContactMe from './pages/ContactMe/ContactMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                {/* <Route exact path="/about">
                    <AboutMe />
                </Route>
                <Route exact path="/skills">
                    <Skills />
                </Route>
                <Route exact path="/work">
                    <MyWork />
                </Route>
                <Route exact path="/contact">
                    <ContactMe />
                </Route> */}
            </Switch>
        </Router>
    </React.StrictMode>
);
