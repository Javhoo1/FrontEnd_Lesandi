import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'

import './register.css';
import { startRegister } from '../../actions/auth'
import Swal from 'sweetalert2';
import { NavbarREST } from '../ui/NavbarREST';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [ formRegisterValues, handleRegisterInputChange ] = useForm( {
        rUserName: '',
        rName: '',
        rPassword1: '',
        rPassword2: '',
        rGrade: '',
        rInstitution: ''
    });
    const { rUserName, rName, rPassword1, rPassword2, rGrade, rInstitution } = formRegisterValues;

    const handleRegister = ( e ) => {
        e.preventDefault();

        if( rUserName === '' || rName === '' || rPassword1 ==='' || rPassword2 === '' || rGrade === '' ){
            return Swal.fire('Error', 'Campo(s) Vacio(s)', 'error');
        }
        
        if ( rPassword1 !== rPassword2 ) {
            return Swal.fire('Error', 'Contraseñas no coinciden', 'error');
        }
        console.log('?');
        dispatch( startRegister( rUserName, rName, rPassword1, rGrade, rInstitution) );
    }

    return (
      <body>
        <NavbarREST />
        <img alt="img-register" className="nubecita3" src="/imagenes/nube3.png" />
        <img alt="img-register" className="nubecita4" src="/imagenes/nube4.png"/>

        <form onSubmit={ handleRegister } className='form'>
        
        <div className="h1-register">
          CREA TU CUENTA
        </div>

        <div className="form-left">
          <div className='form-inputs'>
              <label className='label-register-left'>Ingresa tu nombre de usuario</label>
              <input
                className='form-input'
                type='text'
                name='rUserName'
                placeholder=''
                value= { rUserName }
                onChange= { handleRegisterInputChange }
              />
          </div>

          <div className='form-inputs'>
            <label className='label-register-left'>Ingresa tu nombre</label>
            <input
              className='form-input'
              type='text'
              name='rName'
              placeholder=''
              value= { rName }
              onChange= { handleRegisterInputChange }
            />
          </div>

          <div className='form-inputs'>
            <label className='label-register-left'>Ingresa tu contraseña</label>
            <input
              className='form-input'
              type='password'
              name='rPassword1'
              placeholder=''
              value= { rPassword1 }
              onChange= { handleRegisterInputChange }
            />
          </div>
        </div>

        <div className="form-right">
          <div className='form-inputs'>
            <label className='label-register-right'>Confirma tu contraseña</label>
            <input
              className='form-input'
              type='password'
              name='rPassword2'
              placeholder=''
              value= { rPassword2 }
              onChange= { handleRegisterInputChange }
            />
          </div>
        
          <div className='form-inputs'>
          <label className='label-register-right'>Ingresa tu grado escolar</label>
            <select
              className="form-input"
              name='rGrade'
              value= { rGrade }
              onChange= { handleRegisterInputChange }
            >
              <option>Selecciona</option>
              <option value='primer_grado'>Primer Grado</option>
              <option value='segundo_grado'>Segundo Grado</option>
              <option value='tercer_grado'>Tercer Grado</option>
              <option value='otro'>Otro</option>
            </select>
          </div>

          <div className='form-inputs'>
          <label className='label-register-right'>Ingresa tu escuela (opcional)</label>
            <input
              className='form-input'
              type='text'
              name='rInstitution'
              placeholder=''
              value= { rInstitution }
              onChange={ handleRegisterInputChange }
            />
          </div>
        </div>

            <input 
              type="submit" 
              className="btnSubmit" 
              value="Crear cuenta" 
            />
            <br/>
        
        <div className='register-span'>
          ¿Ya tienes una cuenta? <a href='Login'>Inicia sesión aquí.</a>
        </div>

        </form>
        <img alt="img-register" className="img-cesped-register" src="/imagenes/cesped.png" />
      </body>
    )
}
