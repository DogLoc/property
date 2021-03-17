import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Property from "./Property";
import Properties from "./Properties";

class Main extends Component {

    constructor() {

        super();
        this.state = {
            properties: [],
            currentProperty: null
        }

    }

    componentDidMount() {
        fetch('/api/properties?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNTk0Mzk1NywiZXhwIjoxNjE1OTQ3NTU3LCJuYmYiOjE2MTU5NDM5NTcsImp0aSI6ImlYZ3hBclF3UTBGUVJpdU8iLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.L5HS9pxRvS6JYmoQOBwbQMCDTv5Kkni2BaULCg4cOVU')
            .then(response => {
                return response.json();
            })
            .then(properties => {
                this.setState({ properties });
            });
    }

    renderProperties() {

        return this.state.properties.map(property => {
            return (
                <Properties key={property.id} eventProps={ () => this.handleClick(property)}   property={property}></Properties>
            );
        })
    }


    handleClick(property) {
        this.setState({currentProperty:property});
    }

    render() {
        return (

            <div className="container-fluid houseContainer ">
                { this.renderProperties() }
                <Property property={this.state.currentProperty} />
            </div>


        );
    }
}
export default Main;
