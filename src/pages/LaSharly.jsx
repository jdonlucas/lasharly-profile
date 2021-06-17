import React from 'react';
import Slider from '../elements/Slider';

import Img01 from '../assets/images/lasharly/1.jpg';
import Img02 from '../assets/images/lasharly/2.jpg';
import Img03 from '../assets/images/lasharly/3.jpg';
import Img04 from '../assets/images/lasharly/4.jpg';
import Img05 from '../assets/images/lasharly/5.jpg';
import Img06 from '../assets/images/lasharly/6.jpg';
import Img07 from '../assets/images/lasharly/7.jpg';
import Img08 from '../assets/images/lasharly/8.jpg';
import Img09 from '../assets/images/lasharly/9.jpg';
import Img10 from '../assets/images/lasharly/10.jpg';
import Img11 from '../assets/images/lasharly/11.jpg';
import Img12 from '../assets/images/lasharly/12.jpg';
import Img13 from '../assets/images/lasharly/13.jpg';
import Img14 from '../assets/images/lasharly/14.jpg';
import Img15 from '../assets/images/lasharly/15.jpg';
import Img16 from '../assets/images/lasharly/16.jpg';

export default function LaSharly() {
    let images = [Img01, Img02, Img03, Img04, Img05,
                    Img06, Img07, Img08, Img09, Img10,
                    Img11, Img12, Img13, Img14, Img15, Img16];

    return (
        <div className="container">
            <h2 className="text-left">La Sharly</h2>
            <p style={{height: "5em"}}></p>
            <Slider images={images}/>
        </div>
    )
}