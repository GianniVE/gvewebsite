import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; // import useNavigate()

function Home() {
    const navigate = useNavigate(); // make const

    return (
        <>
            <div className='description'>
                <h1>
                    Gianni Versées

                    <h2>
                        carsousel tekst
                        <p>
                            <br />
                            On this website you can check out a bit more about myself and some project I realised.
                            <br /><br />
                            Wondering what I can mean for you? <br />Check the services I offer or contact me
                        </p>
                        <button className="btn btn-outline-secondary btn-lg" onClick={() => navigate('/Services')}>Services</button> <vr/>
                        <button className="btn btn-outline-secondary btn-lg"onClick={() => navigate('/Contact')}>Contact me</button>

                    </h2>
                </h1>
            </div>
        </>


    );
}

export default Home;