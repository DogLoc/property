import { BrowserRouter, Route, IndexRoute } from "react-router-dom";

require('./bootstrap');
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from './components/head/Header';
import Welcome from './components/elements/Welcome';
import Routes from "./components/conf/Routes";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Redirect to={`/welcome`} />
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
