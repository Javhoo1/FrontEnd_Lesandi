import React from 'react';

/* CSS */
import './LesandiHome.css'
import './ihover.css'
/* CSS */

export const LesandiHome = () => {
    return(
        <body>
        <div className='titulo-lesandi'>
            LESANDI
        </div>
            <div className="left-content">

            
            
            <div className="div-logo">
                <div class="div-widht-height ih-item circle colored effect18 "><a href="Home">
                <div class="img-logo"><img src="Logo-Lesandi2.png" alt="img"/></div>
                <div class="info">
                </div></a></div>
            </div>

            </div>
            <div className="right-content-top">
                <a className="button-login-home" href="login">Iniciar Sesión</a>
            </div>
            <div className="right-content-bottom">
                <a className="button-unete-home" href="register">Registrate</a>
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