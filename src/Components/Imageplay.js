import React, { useState, useEffect } from 'react';
import './Imageplay.css'; 
import game1 from "./assets/images/game1.png";
import game2 from "./assets/images/game2.png";

import game3 from "./assets/images/gam3.png";
import game4 from "./assets/images/game4.png";





const images = [
    game1,
    game2,
    game3,
    game4
   
];

const Imageplay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div>
        <div className="image-carousel">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
            <br/>
            
        </div>
        <div className='text'>
        <h4>Time to realx.</h4>
        <h5>
        Memory games can improve your memory,<br/> attention, focus, processing speed, and problem-solving skills.
        </h5>
        </div>
    
        </div>
    );
}

export default Imageplay;
