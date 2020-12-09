import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'

import './login.css';
import { startLogin } from '../../actions/auth';
import Swal from 'sweetalert2';
import { NavbarREST } from '../ui/NavbarREST';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    
    const [ formLoginValues, handleLoginInputChange ] = useForm( {
        lUserName: '',
        lPassword: ''
    });

    const { lUserName, lPassword } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        if ( lUserName === ''){
            return Swal.fire('Error', 'Campo "Nombre de usuario" vacio', 'error');
        }
        if ( lPassword === ''){
            return Swal.fire('Error', 'Campo "Contraseña" vacio');
        }
        dispatch( startLogin( lUserName, lPassword ) );
    }

    return (
        
        <body>
            <NavbarREST/>
            <img alt="img-login" className="nubecita1" src="/imagenes/nube1.png" />
            <img alt="img-login" className="nubecita2" src="/imagenes/nube2.png" />
            <img alt="img-login" className="gatito" src="https://cdn.pixabay.com/photo/2019/09/14/09/44/cat-4475583_1280.png"></img>
        <div className="containerLogin">

                <form onSubmit={ handleLogin }>
                    <div className="div-h1">
                    Iniciar Sesión   
                    </div>
                    <div className="form-group">
                        <label className="label-login">Nombre de Usuario</label>
                        <input 
                            type="text"
                            className="form-control-login"
                            name="lUserName"
                            placeholder=""
                            onChange={ handleLoginInputChange } />
                    </div>
                    <div className="form-group-login">
                    <label className="label-login">Contraseña</label>
                        <input type="password"
                            className="form-control-login"
                            name="lPassword"
                            placeholder=""
                            onChange={ handleLoginInputChange } />
                    </div>

                    <div className="form-group-login">
                        <input 
                            type="submit"
                            className="btn-login"
                            value="Login" 
                            />
                    </div>
                </form>
                <div className="div-p">
                    ¿No tienes cuenta?, <a href="Register">Registrate aquí.</a>
                </div>
            </div>
        <img alt="img-login" className="img-cesped" src="/imagenes/cesped.png" />
    </body>  
    )
}
