import React from 'react';
import Slider from '../elements/Slider';
import lasharly from '../assets/images/lasharly.png'

import Img01 from '../assets/images/home/photo_2021-06-15 17.22.47.jpeg';
import Img02 from '../assets/images/home/photo_2021-06-16 15.17.16.jpeg';
import Img03 from '../assets/images/home/photo_2021-06-16 15.17.25.jpeg';
import Img04 from '../assets/images/home/photo_2021-06-16 15.17.30.jpeg';


export default function Home() {
    let images = [Img01, Img02, Img03, Img04];
    return (
        <div className="container paddingTop">
            <h1>
                Karla Donlucas
            </h1>
            <h4><img src={lasharly} alt="lasharly"/></h4>
            <Slider images={images}/>
        </div>
    )
} 
