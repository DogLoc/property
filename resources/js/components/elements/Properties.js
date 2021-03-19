import { Card, Button } from 'react-bootstrap/';
import React from "react";
import { BrowserRouter, Link, Redirect } from "react-router-dom";


class Properties extends React.Component {
    constructor() {
        super();

        this.state = {
            properties: [],
        }
    }

    componentDidMount() {
        fetch('/api/properties?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNjEwMDU0OSwiZXhwIjoxNjE2MTE0OTQ5LCJuYmYiOjE2MTYxMDA1NDksImp0aSI6Imh3SnBFRUxGNGFaaFhGRDEiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.lJXi2UeHiPwg7Y1Qo5rsOojK-0fXwUknikOr2Qry6iw')
            .then(response => {
                return response.json();
            })
            .then(properties => {
                this.setState({ properties });
            });
    }



    render() {

        return this.state.properties.map(property => {
            return (
                <Card key={property.id} className="cards col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                    <Card.Img variant="top" src={property.image} />.
                    <Card.Body>
                        <Card.Title>{property.title}</Card.Title>
                        <Card.Text>
                            {property.adress}
                        </Card.Text>
                        <Card.Text>

                            {property.price} $
                            </Card.Text>
                        <Card.Text>
                            {property.availability ? "" : "Solded !"}
                        </Card.Text>

                        <Card.Text>
                            Size : {property.size} m²
                        </Card.Text>

                        <Card.Text>
                            Room : {property.room}
                        </Card.Text>
                        <Link className="btn btn-primary" to={`/property/${property.id}`} variant="primary">Go somewhere</Link>
                    </Card.Body>
                </Card>

            );
        })

    }
} export default Properties;


