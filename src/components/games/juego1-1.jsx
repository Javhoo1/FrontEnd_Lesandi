import React from 'react';

import './juego1-1.css';

export function juego11(){
    let RightAnswers;
    let currentPosition = 0; 
    let correcto =0;
    let incorrecto =0;
    var letra= ['A', 'E', 'I', 'O', 'U'];
    let modal = document.getElementById("popup1");

    const Cuestionary = [

        {"Question" : "Selecciona la imagen que inicie con la vocal 'A'.",
            "Answers": ["Oso", "Tigre", "Agua", "Manzana", "Araña", "Casa", "Arbol", "Rana", "Violin", "Cebolla", "Espejo", "Ocho"], //Objetos con las imagenes tenemos que remplazar.
            "CorrectA": [""]
        },

        {"Question" : "Selecciona la imagen que inicie con la vocal 'E'.",
            "Answers": ["Colores", "Escuela", "Gorro", "Sopa", "Barco", "Flor", "Elefante", "Camion", "Estrella", "CupCake", "Pescado", "Jirafa"], 
            "CorrectA": [""]//Objetos con las imagenes tenemos que remplazar.
        },

        {"Question" : "Selecciona la imagen que inicie con la vocal 'I'.",
            "Answers": ["Iguana", "Pera", "Coca", "Iglu", "Carro", "Leon", "Banana", "Isla", "Helicoptero", "Vaso", "Unicornio", "Uno"], 
            "CorrectA": [""] //Objetos con las imagenes tenemos que remplazar.
        },

        {"Question" : "Selecciona la imagen que inicie con la vocal 'O'.",
            "Answers": ["Araña", "Oveja", "Botella", "Banana", "Zapato", "Ojo", "Manzana", "Pescado", "Oso", "Termo", "Iguana", "Casa"],
            "CorrectA": [""]  //Objetos con las imagenes tenemos que remplazar.
        },

        {"Question" : "Selecciona la imagen que inicie con la vocal 'U'.",
            "Answers": ["Uno", "Uva", "Comida", "Uña", "Tenis", "Indio", "Iglesia", "Perro", "Anillo", "Television", "Armadillo", "Sopa"], 
            "CorrectA": [""] //Objetos con las imagenes tenemos que remplazar.
        }
            
];

    const nextQuestion = () => {
        currentPosition++;
        printHTMLQuestion(currentPosition);
    }
        
    const printHTMLQuestion = (i) => {   

        const q = Cuestionary[i];
        let a = q.Answers;
        a = a.sort((a,b) => Math.floor(Math.random()* 3) -1);
        const HTMLAnswersArray = a.map( CurrentA => `<li class="ans"><button onClick="EvaluateAnswers('${CurrentA}', this)"><img src="imagenes/${CurrentA}.jpg" /> </button> </li>`); //Se establece la respuesta correcta de la pregunta
        const HTMLAnswers = HTMLAnswersArray.join(' ');

        let HTMLQuestionCode = `<p>${q.Question}</p>`;
        let HTMLAnsCode = `<div>${HTMLAnswers}</div>`;
        document.querySelector('.Question').innerHTML = HTMLQuestionCode; 
        document.querySelector('.Resp').innerHTML = HTMLAnsCode;
    }

    const EvaluateAnswers = (Answers, obj) => {
        document.querySelectorAll('.ans').forEach( a => a.classList.remove('Wrong'));
        const parentP = obj.parentNode;
        var indice =0;
        console.log('Answers: ' + Answers + ', RightAnswers: ' + RightAnswers + '  ' + letra[currentPosition] )

        if(Answers.charAt(indice) === letra[currentPosition]) {

            if(parentP.classList.contains('Right')){   
            }

            else{
            parentP.classList.add('Right');
            correcto++;
            document.querySelector('.Rightc').innerHTML = correcto;
            }

            if(correcto%3===0)
                document.getElementById('siguiente').disabled = false;
                    
            if(correcto===15){
                modal.classList.add("show");  // Aqui termina el Juego, redireccionar a la pagina principal 
                closeModal();
            }
        }
            
        else {
            parentP.classList.add('Wrong');
            incorrecto++;
            document.querySelector('.Wrongc').innerHTML = incorrecto;
        }
    }

    printHTMLQuestion(currentPosition); //Seleccionamos la pregunta #.

    function closeModal(){
        modal.classList.remove("show");
    }

    return(
        <body>
        <div class="Question"> 
        printHTMLQuestion(currentPosition);
        </div>
        
        <div class = "Contenedor"> 
            <div class = "tabla"> 
                <ul class = "Resp">

                </ul>
            </div>
        </div>

        <div class="Bajate">
            <button onclick="nextQuestion()" id = "siguiente"  class="sig hvr-grow-rotate" >Siguiente Pregunta</button>
        </div> 

        <br/>

        <p class="RightCSS">Respuestas Correctas: <span class = "Rightc">0 </span></p>
        <p class="RightCSS">Respuestas Incorrectas: <span class ="Wrongc">0</span></p>
        <div id="popup1" class="overlay">
            <div class="popup">
                <h2>Felicidades!!</h2>
                
                <div class="content-1">
                    ¡Felicitaciones! Este es tu primer paso para convertirte en un lector.
                </div>
            
                <br/>
            
                <a href="Juego 1-2.html">
                    <button id="next-level" href="Juego 1-2.html">
                        Siguiente Nivel
                    </button>
                </a>
            </div>
        </div>
        </body>
    );
}