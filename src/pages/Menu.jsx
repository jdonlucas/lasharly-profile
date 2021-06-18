import React from 'react';
import { Link } from "react-router-dom";

import Img01 from '../assets/images/index/-2.png';
import Img02 from '../assets/images/index/ez.png';
import Img03 from '../assets/images/index/la.png';

export default function Menu() {

    return (
        <div className="container center">
            <div className="sideBySide">
                <Link to={'/ezecafe'} className="imgSide"><img src={Img02} alt="eze" style={{width: "100%"}}/></Link>
                <Link to={'/proyectos'} className="imgSide"><img src={Img01} alt="uam" style={{width: "100%"}}/></Link>
            </div>
            <div> 
                <Link to={'/aboutme'} className="lastImg"><img src={Img03} alt="lasharly" style={{width: "30%"}}/></Link>
            </div>
        </div>
    )
}