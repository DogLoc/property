import React, { Component } from 'react';

class Property extends Component {

    constructor() {
        super();

        this.state = {
            visible : true
        }

    }

    render() {

        let {property} = this.props;
        let visible = this.state;
        
        return (


            <div className={`popModal ${visible ? "in" : " out"}`}>
                <img src={property.image}></img>
                <h2>Type : {property.title} </h2>
                <p> Status {property.availability ? 'Available' : 'Vendu!'} </p>
                <p> Price : {property.price} </p>
                <p> Size : {property.size} m²</p>
                <p> Room : {property.room}</p>
                <button className="deleteModal" onClick={ () => this.setState({visible:false})} >X</button>

            </div>
        );

    }
}
export default Property;

