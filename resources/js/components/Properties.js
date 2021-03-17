import { Card,Button } from 'react-bootstrap/';
import React from "react";


class Properties extends React.Component{
    constructor () {
        super();
    }


    render() {
        return (
            <Card className="cards col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                <Card.Img variant="top" src={this.props.property.image}/>.
                <Card.Body>
                    <Card.Title>{this.props.property.title}</Card.Title>
                    <Card.Text>
                        {this.props.property.adress}
                    </Card.Text>
                    <Card.Text>
                        {this.props.property.price}
                    </Card.Text>
                    <Card.Text>
                        {this.props.property.availability ? "" : "Solded !"}
                    </Card.Text>
                    <Button onClick={this.props.eventProps} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )

    }
}export default Properties;


