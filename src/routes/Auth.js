import { authService, firebaseInstance } from "myBase";
import React, { useState } from "react";

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isNewAccount, setIsNewAccount] = useState(false);

    const onChange = (event) => {
        const {
            target: { value, name }
        } = event;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            if (isNewAccount) {
                await authService.createUserWithEmailAndPassword(email, password);
            } else {
                await authService.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const toggleClick = () => {
        setIsNewAccount((prev) => !prev)
    }

    const onSocialClick = (event) => {
        const {
            target: { name }
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }

        authService.signInWithPopup(provider);
    }


    return (
        <>
            <form onSubmit={ onSubmit }>
                <input name="email" type="text" placeholder="E-mail" value={email} onChange={onChange}/>
                <input name="password" type="password" placeholder="Password" value={password} onChange={onChange}/>
                <input type="submit" value={ isNewAccount ? "create account" : "Log In" }/>
            </form>
            <span onClick={toggleClick}>{ isNewAccount ? "Log in" : "create account" }</span>
            <div>
                <button onClick={onSocialClick} name="google">google</button>
                <button onClick={onSocialClick} name="github">github</button>
            </div>
        </>
    )
}