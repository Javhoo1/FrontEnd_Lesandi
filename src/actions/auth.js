import { shallowEqual } from "react-redux";
import { fetchSinToken,fetchConToken } from "../components/helpers/fetch"
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const startLogin = ( user_name, password) => {
    return async( dispatch ) => {
        const resp = await fetchSinToken( 'auth', { user_name, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

    export const startRegister = ( user_name, name, password, grade, institution ) => {
        return async( dispatch ) => {
            const resp = await fetchSinToken( 'auth/new', { user_name, name, password, grade, institution }, 'POST' );
            const body = await resp.json();

            if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
    
                dispatch( login({
                    uid: body.uid,
                    name: body.name
                }) )
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        }
    }

export const startChecking = () => {
    return async ( dispatch ) => {

        const resp = await fetchConToken( 'auth/renew');
        const body = await resp.json();

            if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
    
                dispatch( login({
                    uid: body.uid,
                    name: body.name
                }) )
            } else {
                dispatch( checkingFinish() );
            }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })
