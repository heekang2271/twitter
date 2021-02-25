import React, {useState} from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile"
import Home from "../routes/Home"
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

export default ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profile" component={Profile} />
                        
                    </>
                ) : (
                        <Route exact path="/" component={ Auth }/>
                    )}
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}
