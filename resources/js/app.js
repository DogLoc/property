import {BrowserRouter, Route, IndexRoute} from "react-router-dom";

require('./bootstrap');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Navbar from './components/head/Navbar';
import Routes from "./components/conf/Routes";
import Property from "./components/elements/Property";

class App extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter path="/property">
                <Navbar></Navbar>
                <Main></Main>
                    <Route  path=":id/" component={Property} />
                </BrowserRouter>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
