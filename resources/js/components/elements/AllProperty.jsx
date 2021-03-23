import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap/';

class AllProperty extends Component {

    constructor() {
        super();

        this.state = {
          
        }
    }


    render() {
        let {property} = this.props;
        return (
            <Card  onClick={this.props.click} className="cards col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">

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
                </Card.Body>
            </Card>
        );

    };


}

export default AllProperty;

