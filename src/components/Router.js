import React, {useState} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile"
import Home from "../routes/Home"
import Profile from "../routes/Profile";


export default ({isLoggedIn}) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" component={ Home } />
                    </>
                ) : (
                        <Route exact path="/" component={ Auth }/>
                    )}
            </Switch>
        </Router>
    )
}
