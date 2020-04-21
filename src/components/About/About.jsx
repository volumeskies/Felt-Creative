import React from 'react';
import './About.sass';

import meImage from '../../../public/me.jpg';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentDate: new Date().toLocaleString(),
        };
    }
    render(){
        return(
            <>
            <section id='about' className='card'>
                <h2 className='card__name'>WHO IS TANYA?</h2>
                <section className='card__about'>
                    <p>That is me, this looking-up-with-hope face. You want to know why am I so encouraged?
                        That is because few days ago I found out that I have a great chance to be a part of JetBrains Community.
                        The person reading this might be the one who will open for me these gates to the big world of gaining useful and powerful experience.
                        Isn't that inspiring enough?...
                    </p>
                    <p>
                        I am studying at ITMO University since 2016. This year is my graduation year. My programme course is called 'Information Technologies in Design'.
                        Hope you see that it actually fitted well to me, scrolling through this little website. Last summer I had experience in developing
                        website for local wooden craft company <a href='http://desiretree.ru/'>Desire Tree</a>. At the same time I've been studying at EPAM JavaScript courses and later became
                        a student of their Training Center where I'd learn some cool things like React, TypeScript and Webpack. This year I've decided to become a part of
                        something bigger and professional. <br></br>Like JetBrains :)
                    </p>
                </section>
                <section className='card__photo'>
                    <img src={meImage} alt=''></img>
                </section>
            </section>
            </>
        );
    };
}

export default About;