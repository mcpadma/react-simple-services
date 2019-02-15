import React, { Fragment } from 'react';
import { Route, NavLink, Link }   from 'react-router-dom';

import HomePage from './pages/Homepage';
import UserDetails from './pages/userDetails';
export default () =>{
    return (
        <Fragment>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/details" component={UserDetails}/>
        </Fragment>
    )
}