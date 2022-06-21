import React from 'react';
import './About.css'

function About() {
    return (
        <div class="cards">
            <div class="cards_img">
                <img src={process.env.PUBLIC_URL + '/gianni.jpg'} alt='logo' className='image'></img>
            </div>
            <div class="card parent">
                Hi!
            
                My name is Gianni Versées.
                <br /><br/>
                I'm a second year computer science Student at the Karel de Grote Hogeschool (specialisation Full-Stack).
                <br/><br/>
                In my free time i'm a volleyball player/coach.
                <br/><br/>
                Wanna know more about me? Take a look at my curriculum vitae.
                <br/><br/>

                <div className='cv'>
                    <a href={process.env.PUBLIC_URL + '/cv_gianni.pdf'} target='blank'>Gianni Versées - C.V.</a>
                </div> 
            </div>
        </div>
    );
}

export default About;