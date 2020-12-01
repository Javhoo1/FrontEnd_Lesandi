import React from 'react';

/* CSS */
import './LesandiHome.css'
/* CSS */

export const LesandiHome = () => {
    return(
        <body>
        <div className='titulo-lesandi'>
            LESANDI
        </div>

        <div className="logo-content">
            <img className="img-logo" src="Logo-Lesandi2.png" alt="img"/>
        </div>

        <div className="div-boton-login">
            <a className="boton-home-login" href="login">Inicia Sesión</a>
        </div>

        <div className="div-boton-register">
            <a className="boton-home-register" href="register">  Registrarse  </a>
        </div>

        <div className='h3-home'>
            <h3>Aprender nunca ha sido tan divertido</h3>
        </div>
            
            <div class="bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
        </div>
        
            
        
        </body>
    );
}