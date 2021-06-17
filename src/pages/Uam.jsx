import React from 'react';
import Slider from '../elements/Slider';

import Img01 from '../assets/images/uam/1.jpg';
import Img02 from '../assets/images/uam/2.jpg';
import Img03 from '../assets/images/uam/3.jpg';
import Img04 from '../assets/images/uam/4.jpg';
import Img05 from '../assets/images/uam/5.jpg';
import Img06 from '../assets/images/uam/6.jpg';
import Img07 from '../assets/images/uam/7.jpg';
import Img08 from '../assets/images/uam/8.jpg';
import Img09 from '../assets/images/uam/9.jpg';
import Img10 from '../assets/images/uam/11.jpg';

export default function Uam() {
    let images = [Img01, Img02, Img03, Img04, Img05,
                    Img06, Img07, Img08, Img09, Img10];

    return (
        <div className="container">
            <h2 className="text-left">Proyectos UAM</h2>
            <div>
                <Slider images={images}/>

            </div>
        </div>
    )
}