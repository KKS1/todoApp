import React, { Component } from 'react';
import TodoContainer from './todos/containers/todoContainer';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={TodoContainer} />
            </Switch>    
        </BrowserRouter>
    )
}

export {Routes}