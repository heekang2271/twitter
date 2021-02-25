import React, {useState} from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile"
import Home from "../routes/Home"
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

export default ({isLoggedIn}) => (
    <Router>
        {isLoggedIn && <Navigation />}
        <Switch>
            {isLoggedIn ? (
                <>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" exact component={Profile} />
                    <Redirect from="*" to="/" />
                </>
            ) : (
                    <>
                        <Route path="/" exact component={Auth} />
                        <Redirect from="*" to="/" />
                    </>
                )}
        </Switch>
    </Router>
)