import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
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
                        <Menu.Item
                            name='home'
                        />
                        <Menu.Item
                            name='about'
                        />
                        <Menu.Item
                            name='skills'
                        />
                        <Menu.Item
                            name='contacts'
                        />
                    </div>
                :null}
            </Menu>
        );
    }
}

export default Nav;