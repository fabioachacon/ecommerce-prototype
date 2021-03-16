import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import PrivateRoute from './components/PrivateRoute';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Product from './pages/Product';
import Products from './pages/Products';

const Routes = () => {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/signup'>
                    <SignUp />
                </Route>
                <Route exact path='/product/:id'>
                    <Product />
                </Route>
                <Route exact path='/products/:page'>
                  <Products />
                </Route>
            </Switch>
        </AnimatePresence>
    )
}

export default Routes;
