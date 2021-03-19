import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Main from "../Main";
import Property from "../elements/Property";

class Routes extends Component {

    constructor() {
        super();
    }

    render() {
        return (

            <Switch>
                <Route path="/properties" component={Main} />
                <Route exact path="/property/:id">dqdqzdqzd</Route> 
                <Route path="/topic" component={Property} />
            </Switch>
        )
    }
}
export default Routes;