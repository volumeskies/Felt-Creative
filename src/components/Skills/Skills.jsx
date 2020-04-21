import React from 'react';
import './Skills.sass';

class Skills extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
            <section id='skills' className='card'>
                <h2 className='card__heading'>SKILLS</h2>
                <section className='card__skills'>
                    <div className='card__first-row'>
                        <span>HTML5 + CSS3</span>
                        <span>SASS</span>
                        <span>JavaScript</span>
                    </div>
                    <div className='card__second-row'>
                        <span>TypeScript</span>
                        <span>ReactJS</span>
                        <span>Node.JS</span>
                    </div>
                    <div className='card__third-row'>
                        <span>Socket.io</span>
                        <span>Webpack</span>
                        <span>Git</span>
                    </div>
                </section>
            </section>
            </>
        );
    }
}

export default Skills;