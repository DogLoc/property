import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Property from "./elements/Property";
import Properties from "./elements/Properties";

class Main extends Component {

    constructor() {

        super();

    }


    render() {
        return (

            <div className="container-fluid houseContainer ">
                <Properties></Properties>
            </div>

        );
    }
}
export default Main;
