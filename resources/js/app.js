import {BrowserRouter} from "react-router-dom";

require('./bootstrap');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Router from "./components/Router";
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    render(){
        return (
            <div>
                <BrowserRouter>
                <Navbar></Navbar>
                <Main></Main>
                <Router></Router>
                </BrowserRouter>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
