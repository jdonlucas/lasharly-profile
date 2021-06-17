import React from 'react';
import Slider from '../elements/Slider';

import Img01 from '../assets/images/ezecafe/photo_2021-06-16 15.18.05.jpeg';
import Img02 from '../assets/images/ezecafe/photo_2021-06-16 15.18.09.jpeg';
import Img03 from '../assets/images/ezecafe/photo_2021-06-16 15.18.12.jpeg';
import Img04 from '../assets/images/ezecafe/photo_2021-06-16 15.18.19.jpeg';

export default function EzeCafe() {
    let images = [Img01, Img02, Img03, Img04];

    return (
        <div className="container">
            <h2 className="text-left">Eze Café</h2>
            <div className="textBox">
                <p>
                    EZE CAFÉ es un proyecto familiar. Esta cafetería es el resultado de un esfuerzo
                    en conjunto, una combinación de circunstancias y el trabajo en equipo de una 
                    gran familia. Nuestro nombre surge como un homenaje a mi abuelo "Cheque" jugando
                    fonéticamente con su nombre "Ezequiel" se crea "EZE CAFÉ".
                </p>
                <p>
                    En este proyecto yo me encargo de la publicidad en redes (fotografías y videos)
                </p>
            </div>
            <Slider images={images}/>
        </div>
    )
}