import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, 
         faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
    

export default function Contacto() {

    return (
        <div className="container">
            <h2>Contacto</h2>
            <div className="textColor">
                Email: <a href="mailto:donlucas@lasharly.me" className="anchor">donlucas@lasharly.me</a>
                <h5>Links</h5>
                <div className="justify-center">
                    <a className="links" href="https://www.instagram.com/eze.cafe">
                        <div className="brand"><FontAwesomeIcon icon={faInstagram} /></div>@eze.cafe
                    </a>
                    <a className="links" href="https://www.facebook.com/ezecafee">
                        <div className="brand"><FontAwesomeIcon icon={faFacebookSquare} /></div>@ezecafee
                    </a>
                    <a className="links" href="https://twitter.com/CafeEze">
                        <div className="brand"><FontAwesomeIcon icon={faTwitter} /></div>@CafeEze
                    </a>
                    <a className="links" href="https://ezecafe.com.mx">
                        <div className="brand"><FontAwesomeIcon icon={faDesktop} /></div>ezecafe.com.mx
                    </a>
                </div>
            </div>
        </div>
    )
}