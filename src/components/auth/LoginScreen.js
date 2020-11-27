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
        
        <body className="bodyLogin">
            <NavbarREST/>
        <span className='romboLogin'></span>
        <span className='romboLogin'></span>
        <span className='romboLogin'></span>
        <span className='romboLogin'></span>
        <span className='romboLogin'></span>
    <div className="containerLogin">

        

        <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
                <form onSubmit={ handleLogin }>
                    <h1 className="h1-login">Inicia Sesión</h1>
                    <div className="form-group">
                        <label className="label-login">Nombre de Usuario</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="lUserName"
                            placeholder=""
                            //value={this.state.user_name}
                            onChange={ handleLoginInputChange } />
                    </div>
                    <div className="form-group">
                    <label className="label-login">Contraseña</label>
                        <input type="password"
                            className="form-control"
                            name="lPassword"
                            placeholder=""
                            //value={this.state.password}
                            onChange={ handleLoginInputChange } />
                    </div>

                    <div className="form-group">
                        <input 
                            type="submit"
                            className="btnSubmit"
                            value="Login" 
                            />
                    </div>
                </form>
                <p>¿No tienes cuenta?, <a href="Register">Registrate aquí.</a></p>
            </div>
        </div>
    </div>  
    </body>  
    )
}
