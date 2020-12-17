import React from 'react';

import { Navbar } from '../ui/Navbar';

import './LesandiScreen.css';


export const LesandiScreen = () => {
    return (
        <div>
            <Navbar />
            <div className="div-titulo">
                <p>SELECCIONA TU GRADO ESCOLAR</p>
            </div>
            <div className='div-games-left'>
            
            <div class="ih-item circle effect9 bottom_to_top"><a src="https://lesandi-webapp1.herokuapp.com/">
                <div class="img div-img">1</div>
                <div class="info">
                    <h3>Primer Grado</h3>
                    <p>Objetivo: Reconocer letras según el sonido inicial de las imagenes que se muestran.</p>
                    
                    <a href="juego1-1.html" role="button" class="button-games" >Jugar</a>
                </div>
            </a></div>
            

            </div>
            <div className='div-games-center'>
            <div class="ih-item circle effect9 bottom_to_top"><a src="https://lesandi-webapp1.herokuapp.com/Juego%202-1.html">
                <div class="img div-img">2</div>
                <div class="info">
                    <h3>Segundo Grado</h3>
                    <p>Objetivo: Jugar con las rimas, ayuda al aprendizaje de la lengua.</p>
                    
                    <a href="juego2-1.html" role="button" class="button-games">Jugar</a>
                </div>
            </a></div>
            </div>
            <div className='div-games-right'>
            <div class="ih-item circle effect9 bottom_to_top"><a src="https://lesandi-webapp1.herokuapp.com/Juego%203-1.html">
                <div class="img div-img">3</div>
                <div class="info">
                    <h3>Tercer Grado</h3>
                    <p>Objetivo: Jugar con las palabras y frases, reforzar la comprensión lectora.</p>
                    
                    <a role="button" class="button-games" src="https://lesandi-webapp1.herokuapp.com/Juego%203-1.html">Jugar</a>
                </div>
            </a></div>
            </div>
        </div>
    )
}
