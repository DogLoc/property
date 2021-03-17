import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../Main";
import Property from "../elements/Property";

class Routes extends Component {

    constructor() {
        super();
    }

    render() {
            return (
                <div>
                    <Route  path="/properties" component={Main} />
                    <Route  path="property/:id" component={Property} />
                    <Route path="/topic" component={Property} />
                </div>
            )
    }
}
export default Routes;

