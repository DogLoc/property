



import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Main from "./Main";

class Router extends Component {

    constructor() {
        super();
    }

    render() {
            return (
                <div className="main-route-place">
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={Main} />
                    <Route path="/topics" component={Main} />
                </div>
            )
    }
}
export default Router;

