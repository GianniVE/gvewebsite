import React from 'react'
import { useState, useEffect } from 'react'
import './Services.css'

const placeholderText = ["Software Development", "Web Development", 
"Web Design", "Consultancy", "Custom Solutions"];

function Services_Homepage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = () => {
            setIndex(prevIndex => {
                if (prevIndex === placeholderText.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            })
        };
        setInterval(timer, 2000);
        return () => {clearInterval(timer); }
    }, []);

    return (
        <h2>{placeholderText[index]}</h2>
    );
}

export default Services_Homepage;

