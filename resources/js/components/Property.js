import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Property extends Component {

    constructor() {
        super();
    }

    render() {
            return (
                <div>
                    <h2> {this.props.property.title} </h2>
                    <h3> Status {this.props.property.availability ? 'Available' : 'Vendu!'} </h3>
                    <h3> Price : {this.props.property.price} </h3>

                </div>
            );
    }
}
export default Property;

