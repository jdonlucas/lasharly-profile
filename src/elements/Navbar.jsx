import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {

    useEffect(() => {
        let body = document.body;
        let burgerMenu = document.getElementsByClassName('b-menu')[0];
        let burgerContain = document.getElementsByClassName('b-container')[0];
        let burgerNav = document.getElementsByClassName('b-nav')[0];
        let hiddenBack = document.getElementById('back');
        let links = document.getElementsByClassName('b-link');
    
        burgerMenu.addEventListener('click', () => {
          [body, burgerContain, burgerNav].forEach(function (el) {
            el.classList.toggle('open');
            hiddenBack.classList.toggle('hidden')
          });
        }, false);
        Array.from(links).forEach(function(element) {
            element.addEventListener('click', function() {
                [body, burgerContain, burgerNav].forEach(function (el) {
                    el.classList.toggle('open');
                    hiddenBack.classList.toggle('hidden')
                });
            });
        });
    });

  return (
        <>
            <div className="b-nav">
                <li><Link className="b-link" to={"/"}>Inicio</Link></li>
                <li><Link className="b-link" to={"/index"}>Portafolio</Link></li>
                <li><Link className="b-link" to={"contacto"}>Contacto</Link></li>
            </div>

            <div className="b-container">
                <div className="b-menu">
                    <div className="b-bun b-bun--top"></div>
                    <div className="b-bun b-bun--mid"></div>
                    <div className="b-bun b-bun--bottom"></div>
                </div>
            </div>
            <div id="back" className="hidden"></div>
        </>
  )

}