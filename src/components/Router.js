import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile"
import Home from "../routes/Home"
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

export default ({isLoggedIn, userObj}) => (
    <Router>
        {isLoggedIn && <Navigation />}
        <Switch>
            {isLoggedIn ? (
                <>
                    <Route path="/" exact>
                        <Home userObj={ userObj }/>
                    </Route>
                    <Route path="/profile" exact>
                        <Profile />
                    </Route>
                    <Redirect from="*" to="/" />
                </>
            ) : (
                    <>
                        <Route path="/" exact>
                            <Auth />
                        </Route>
                        <Redirect from="*" to="/" />
                    </>
                )}
        </Switch>
    </Router>
)