import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx'
import Contacts from '../Contacts/Contacts.jsx'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.sass';

class App extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <About/>
                <Skills/>
                <Contacts/>
            </>
        );
    }
}

export default App;
