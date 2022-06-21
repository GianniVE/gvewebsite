import React from 'react';
import './About.css'

function About() {
    return (
        <div class="cards">
            <div class="cards_img">
                <img src={process.env.PUBLIC_URL + '/gianni.jpg'} alt='logo' className='image'></img>
            </div>
            <div class="card">
                Hi!
                <br />
                My name is Gianni.
                <br />
                I'm a second year computer science Student
                at the Karel de Grote Hogeschool (specialisation Full-Stack).
            </div>
        </div>
    );
}

export default About;