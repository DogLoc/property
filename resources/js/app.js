import { BrowserRouter, Route, IndexRoute } from "react-router-dom";

require('./bootstrap');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Navbar from './components/head/Navbar';
import Routes from "./components/conf/Routes";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Main></Main>
                <Routes />
            </div>
        );
    }
}
export default App;
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root"));
