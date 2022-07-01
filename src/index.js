import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import Header from './components/Header/Header';
import App from './pages/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>
);
