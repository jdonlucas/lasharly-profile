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

import ImgAlt01 from '../assets/images/uam2/bonavita.png';
import ImgAlt02 from '../assets/images/uam2/concursos.png';
import ImgAlt03 from '../assets/images/uam2/elultimotrago.png';
import ImgAlt04 from '../assets/images/uam2/sinadiosnidespedida.png';
import ImgAlt05 from '../assets/images/uam2/vidaomuerte.png';

export default function Uam() {
    let images = [Img01, Img02, Img03, Img04, Img05,
                    Img06, Img07, Img08, Img09, Img10];
    
    let images2 = [ImgAlt01, ImgAlt02, ImgAlt03, ImgAlt04,
                    ImgAlt05];

    return (
        <div className="container">
            <h2 className="text-left">Proyectos UAM</h2>
            <div className="sideBySide">
                <div className="sideElement">
                    <Slider images={images}/>
                </div>
                <div className="sideElement">
                    <Slider images={images2}/>
                    <a 
                        className="anchor"
                        href="https://drive.google.com/drive/folders/1pcPeUTWaPsp1oKi3HS4vj97klSQBN4Y5?usp=sharing">
                            Ver videos
                    </a>
                </div>
            </div>
        </div>
    )
}