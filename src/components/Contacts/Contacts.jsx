import React from 'react';
import './Contacts.sass';

class Contacts extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id='contacts' className='card'>
                <h2 className='card__heading-contacts'>CONTACTS</h2>
                <div className='card__contacts'>
                    <div className='card__social'>
                        <a href='http://github.com/volumeskies/'>github: volumeskies</a>
                        <a href='https://tele.gg/volumeskies'>telegram: @volumeskies</a>
                        <a href='mailto:krivorotovatd@gmail.com'>krivorotovatd@gmail.com</a>
                    </div>
                    <span>I am also a little drummer girl, check my band's music here</span>
                    <div className='card__music'>
                        <a href='https://music.apple.com/ru/artist/%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D0%B5/1423731366'>Apple Music</a>
                        <a href='https://soundcloud.com/user-650720043'>SoundCloud</a>
                        <a href='https://vk.com/molchanie11'>VK</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;