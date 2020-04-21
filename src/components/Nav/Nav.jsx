import React from 'react';
import { Menu } from 'semantic-ui-react';
import { HashRouter as Router } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { HashLink as Link } from 'react-router-hash-link';
import './Nav.sass';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            button: false,
            menu: false
        };
    }

    toggleButton = ()=>{
        this.setState({
            button: !this.state.button
        });
    }

    toggleMenu = ()=>{
        this.setState({
            menu: !this.state.menu
        });
    }

    render(){
        return(
            <Router>
            <Menu text vertical className='header__nav'>
                <Menu.Item Header className='header__navbutton'>
                    {this.state.button?
                        <Icon
                            className='header__heart'
                            inverted color='white' 
                            name='heart' 
                            aria-hidden='false' 
                            size='big'
                            onClick={()=>{
                                this.toggleButton()
                                this.toggleMenu()
                            }}
                        />
                        :
                        <Icon
                            className='header__heart'
                            inverted color='white' 
                            name='heart outline' 
                            aria-hidden='false' 
                            size='big'
                            onClick={()=>{
                                this.toggleButton()
                                this.toggleMenu()
                            }}
                        />
                    }
                </Menu.Item>
                {this.state.menu?
                    <div>
                        <Link smooth to='#home'>
                            <Menu.Item
                                name='home'
                            />
                        </Link>
                        <Link smooth to='#about'>
                            <Menu.Item
                                name='about'
                            />
                        </Link>
                        <Link smooth to='#skills'>
                            <Menu.Item
                                name='skills'
                            />
                        </Link>
                        <Link smooth to='#contacts'>
                            <Menu.Item
                                name='contacts'
                            />
                        </Link>
                    </div>
                :null}
            </Menu>
    </Router>
        );
    }
}

export default Nav;