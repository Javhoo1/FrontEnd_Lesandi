import React from 'react'

import { Navbar } from '../ui/Navbar'

import './LesandiScreen.css'
import './ihover.css'

export const LesandiScreen = () => {
    return (
        <div>
            <Navbar />
            <div className="div-titulo">
                <p>SELECCIONA TU NIVEL</p>
            </div>
            <div className='div-games-left'>
            
            <div class="ih-item circle effect9 right_to_left"><a href="juego 1-1.html">
                <div class="img div-img"><img src="num1.png"/></div>
                <div class="info">
                    <h3>Primer Grado</h3>
                    <p>Con 3 niveles de dificultad</p>
                    <br/>
                    <a role="button" class="button-games" >Jugar</a>
                </div>
            </a></div>

        
            </div>
            <div className='div-games-center'>
            <div class="ih-item circle effect9 bottom_to_top"><a href="juego 2-1.html">
                <div class="img div-img"><img src="num2.png"/></div>
                <div class="info">
                    <h3>Segundo Grado</h3>
                    <p>Con 3 niveles de dificultad</p>
                    <br/>
                    <a role="button" class="button-games">Jugar</a>
                </div>
            </a></div>
            </div>
            <div className='div-games-right'>
            <div class="ih-item circle effect9 left_to_right"><a href="juego 3-1.html">
                <div class="img div-img"><img className="img-circle" src="num3.png"/></div>
                <div class="info">
                    <h3>Tercer Grado</h3>
                    <p>Con 3 niveles de dificultad</p>
                    <br/>
                    <a role="button" class="button-games" href="juego 3-1.html">Jugar</a>
                </div>
            </a></div>
            </div>
        </div>
    )
}
