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
        dispatch( startRegister( rUserName, rName, rPassword1, rGrade) );
    }

    return (
      <body>
        <NavbarREST />
        <form onSubmit={ handleRegister } className='form form-register'>
          
        <h1 className="h1-register">
            CREA TU CUENTA
        </h1>

        <div className='form-inputs'>
            <label className='label-register'>Ingresa tu nombre de usuario</label>
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
        <label className='label-register'>Ingresa tu nombre</label>
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
        <label className='label-register'>Ingresa tu contraseña</label>
          <input
            className='form-input'
            type='password'
            name='rPassword1'
            placeholder=''
            value= { rPassword1 }
            onChange= { handleRegisterInputChange }
          />
        </div>

        <div className='form-inputs'>
          <label className='label-register'>Confirma tu contraseña</label>
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
        <label className='label-register'>Ingresa tu grado escolar</label>
          <select
            className="form-control"
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
        <label className='label-register'>Ingresa el nombre de tu escuela (opcional)</label>
          <input
            className='form-input'
            type='text'
            name='rInstitution'
            placeholder=''
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

        <span className='form-input-login'>
          ¿Ya tienes una cuenta? Inicia sesión <a href='Login'>aquí</a>
        </span>
      </form>
      </body>
    )
}
