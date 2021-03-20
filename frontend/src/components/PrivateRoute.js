import React from 'react';
import { Route, useHistory, Redirect } from 'react-router-dom';
import { isLogged } from '../lib/AuthHandler';

const PrivateRoute = ({children, ...rest}) => {
    const logged = isLogged();
    const authorized = (rest.private && !logged) ? false : true;

    return (
        <Route
           {...rest}
           render={() =>
            logged ? children : <Redirect to='/signin'/>
           }
        />  

    )
}

export default PrivateRoute;
