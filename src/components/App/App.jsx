import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.sass';

class App extends React.Component{
    render(){
        return(
            <>
            <Header/>
            </>
        );
    }
}

export default App;
