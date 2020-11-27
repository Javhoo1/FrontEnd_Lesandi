import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'

import './login.css';
import { startLogin, startRegister } from '../../actions/auth'
import Swal from 'sweetalert2';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    
    const [ formLoginValues, handleLoginInputChange ] = useForm( {
        lUserName: '',
        lPassword: ''
    });

    const [ formRegisterValues, handleRegisterInputChange ] = useForm( {
        rUserName: 'Javo2',
        rName: 'Javier2',
        rPassword1: '123456',
        rPassword2: '123456',
        rGrade: 'primer_grado',
        rInstitution: 'UA'
    });
    const { lUserName, lPassword } = formLoginValues;

    const { rUserName, rName, rPassword1, rPassword2, rGrade, rInstitution } = formRegisterValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin( lUserName, lPassword ) );
    }

    const handleRegister = ( e ) => {
        e.preventDefault();
        
        if ( rPassword1 !== rPassword2 ) {
            return Swal.fire('Error', 'Contraseñas no coinciden', 'error');
        }
        console.log('?');
        dispatch( startRegister( rUserName, rName, rPassword1, rGrade, rInstitution ) );
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre de usuario"
                                name="lUserName"
                                //value={ lUserName }
                                onChange= { handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                //value={ lPassword }
                                onChange= { handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ handleRegister }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre de usuario"
                                name="rUserName"
                                value= { rUserName }
                                onChange= { handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName"
                                value= { rName }
                                onChange= { handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="rPassword1"
                                value= { rPassword1 }
                                onChange= { handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="rPassword2"
                                value= { rPassword2 }
                                onChange= { handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <select
                                className="form-control" 
                                name="rGrade"
                                value= { rGrade }
                                onChange= { handleRegisterInputChange }
                            >
                                <option>Selecciona grado escolar</option>
                                <option value='primer_grado'>Primer Grado</option>
                                <option value='segundo_grado'>Segundo Grado</option>
                                <option value='tercer_grado'>Tercer Grado</option>
                                <option value='otro'>Otro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre de escuela" 
                                name="rInstitution"
                                value= { rInstitution }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
