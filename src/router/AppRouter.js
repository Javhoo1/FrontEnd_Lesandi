import React, { useEffect } from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Redirect
    } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
//import Swal from 'sweetalert2';

import { LoginScreen } from '../components/auth/LoginScreen';
import { LesandiScreen } from '../components/Lesandi/LesandiScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { LesandiHome } from '../components/Lesandi/LesandiHome';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth );

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch])

    if ( checking ) {
        // ARREGLAR ESTO DESPUES,
        return (<h5>Cargando...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/"
                        component= { LesandiHome }  
                        />

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated= { !!uid } //Convertir String en boolean
                        />
                    
                    <PublicRoute 
                        exact 
                        path="/register" 
                        component={ RegisterScreen } 
                        isAuthenticated= { !!uid } //Convertir String en boolean
                        />

                    <PrivateRoute 
                        exact 
                        path="/games" 
                        component={ LesandiScreen } 
                        isAuthenticated= { !!uid } //Convertir String en boolean
                        />  


                    <Redirect to="/games" />
                </Switch>
            </div>
        </Router>
    )
}
