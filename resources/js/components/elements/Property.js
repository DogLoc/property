import React, { Component } from 'react';

class Property extends Component {

    constructor() {
        super();
        this.state = {
            property : ""
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;



        fetch(`/api/properties/${params.id}/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNjAxNzEzNSwiZXhwIjoxNjE2MDMxNTM1LCJuYmYiOjE2MTYwMTcxMzUsImp0aSI6ImVFU0dIc2VVcktETEpXS3giLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.vAIyE3VALg-Q2oY4QlE0Wg162RxnP3n9TGNd7YHnG5c`)
            .then(response => {
                return response.json();
            })
            .then(property => {
                this.setState({ property });
                console.log(property);
            });
    }

    render() {
            return (

                <div>
                    <h2> {this.state.property.id} </h2>
                    <h2> {this.state.property.title} </h2>
                    <h3> Status {this.state.property.availability ? 'Available' : 'Vendu!'} </h3>
                    <h3> Price : {this.state.property.price} </h3>
                </div>

            );
    }
}
export default Property;

