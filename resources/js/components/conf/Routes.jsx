import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Properties from "../elements/Properties";
import Welcome from "../elements/Welcome";

class Routes extends Component {

    constructor() {
        super();
    }

    render() {
        return (

            <Switch>
                <Route path="/properties" component={Properties} />
                <Route path="/welcome" component={Welcome} />
            </Switch>
        )
    }
}
export default Routes;