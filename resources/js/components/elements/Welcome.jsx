import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Welcome extends Component {

    constructor() {
        super();

        this.state = {
            visible: true
        }
    }

    render() {

        return (


            <div className={`popModal ${this.state.visible ? " in" : "out"}`}>
                <Link to='/properties'>
                    <button className="deleteModal" onClick={() => {
                        this.setState({ visible: false })
                    }} >X</button>
                </Link>
                <div className="col-md-12 welcome">
                    <h1>Ce site me sert à regarder comment utiliser react et Laravel</h1>
                    <h3>Clique sur la croix pour voir le résultat mec</h3>
                </div>

            </div >
        );

    }
}
export default Welcome;

