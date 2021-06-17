import React, { useState } from 'react';
import Left from '../assets/images/left.png';
import Right from '../assets/images/right.png';

export default function Slider(props) {

    const [current,setCurrent] = useState(0);
    const [total] = useState(props.images.length);

    const styleDisplay = [
        {   
            display: "none"
        },
        {   
            display: "block"
        }
    ]

    const styleImage = {
        opacity: "1"
    }

    const moveRight = () => {
        if(current + 1 > total - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    }

    const moveLeft = () => {
        if(current - 1 < 0) {
            setCurrent(total - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    return (
        <div className="imageSlider">
            <div id="leftButton" onClick={moveLeft}>
                <img src={Left} alt="left arrow"/>
            </div>
            <div id="imageCanvas">
                {props.images.map((image,index) => (
                    <div className="imageSliderDiv" key={index} style={(current === index) ? styleDisplay[1] : styleDisplay[0]}>
                        <img src={image} alt={index} style={(current === index) ? styleImage : {}}/>
                    </div>
                ))}
            </div>
            <div id="rightButton" onClick={moveRight}>
                <img src={Right} alt="right arrow"/>
            </div>
        </div>
    )

}