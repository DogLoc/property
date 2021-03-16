import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Main Component */
class Main extends Component {

    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            properties: [],
        }
    }
    /*componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
     */
    componentDidMount() {
        /* fetch API in action */
        fetch('/api/properties?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNTg1NzIzMywiZXhwIjoxNjE1ODYwODMzLCJuYmYiOjE2MTU4NTcyMzMsImp0aSI6Ikx3RWhUUEF4THhrdTNzV2MiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.h9bECc-p1dIr5lkd5gK0_VbqtutAFHj9fUPXsnlKdpY')
            .then(response => {
                return response.json();
            })
            .then(properties => {
                //Fetched product is stored in the state
                this.setState({ properties });
            });
    }

    renderProperties() {
        return this.state.properties.map(property => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <li key={property.id} >
                    { property.title }
                </li>
            );
        })
    }

    render() {
        /* Some css code has been removed for brevity */
        return (
            <div>
                <ul>
                    { this.renderProperties() }
                </ul>
            </div>

        );
    }
}
export default Main;
