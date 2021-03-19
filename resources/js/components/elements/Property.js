import React, { Component } from 'react';

class Property extends Component {

    constructor() {
        super();
        this.state = {
            property: ""
        }
    }

    componentDidMount() {
        let { match: { params } } = this.props;

        fetch(`/api/properties/${params.id}/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNjEwMDU0OSwiZXhwIjoxNjE2MTE0OTQ5LCJuYmYiOjE2MTYxMDA1NDksImp0aSI6Imh3SnBFRUxGNGFaaFhGRDEiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.lJXi2UeHiPwg7Y1Qo5rsOojK-0fXwUknikOr2Qry6iw`)
            .then(response => {
                return response.json();
            })
            .then(CurProperty => {
                this.setState({ property: CurProperty.data });
            });
    }


    render() {

        return (
            <div>
                <h2> {this.state.property.title} </h2>
                <p> Status {this.state.property.availability ? 'Available' : 'Vendu!'} </p>
                <p> Price : {this.state.property.price} </p>
                <p> Size : {this.state.property.size} m²</p>
                <p> Room : {this.state.property.room}</p>
            </div>
        );
    }
}
export default Property;

