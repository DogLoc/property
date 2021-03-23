import React, { useState } from "react";
import Property from './Property';
import AllProperty from './AllProperty';

class Properties extends React.Component {
    constructor() {
        super();

        this.state = {
            properties: [],
            visible: false,
            curProperty: ""
        }
    }

    componentDidMount() {

        fetch('/api/properties?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNjE5MTY0MywiZXhwIjoxNjE2NDkxNjQzLCJuYmYiOjE2MTYxOTE2NDMsImp0aSI6IjJtTjltT0F3VmF3ODc3ZjkiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.cB_CKspdKGhPqyLPGE-gOX2vRJDuX28z4lFkQeH3z-k')
            .then(response => {
                return response.json();
            })
            .then(properties => {
                this.setState({ properties: properties });
            });
    };

    handleClick(id) {
        fetch(`/api/properties/${id}/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNjE5MTY0MywiZXhwIjoxNjE2NDkxNjQzLCJuYmYiOjE2MTYxOTE2NDMsImp0aSI6IjJtTjltT0F3VmF3ODc3ZjkiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.cB_CKspdKGhPqyLPGE-gOX2vRJDuX28z4lFkQeH3z-k`)
            .then(response => {
                return response.json();
            })
            .then(CurProperty => {
                this.setState(
                    {
                        visible: true,
                        curProperty: CurProperty.data
                    }
                );
            });
    }

    render() {

        const {curProperty, properties, visible} = this.state;

        return (

            <div className="houseContainer">
               { visible ? <Property property={curProperty}/> : "" } 
                { properties.map(property => {
                    return (
                        <AllProperty key={property.id} property={property} click={() => this.handleClick(property.id)} />
                    );
                })}
            </div>

        )

    }

} export default Properties;


