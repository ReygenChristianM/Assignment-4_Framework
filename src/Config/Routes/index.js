import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "../../components/pages/login"
import Dashboard from "../../components/pages/Dashboard"
import About from "../../components/pages/About"
import Register from '../../components/pages/Register'

const Routes = () => {
    return(
        <Router>
            <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
        </Router>
        
    )
};

export default Routes;
