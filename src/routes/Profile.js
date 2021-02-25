import { authService } from "myBase";
import React from "react";

export default () => {
    const onLoggedOut = () => authService.signOut();

    return (
        <button onClick={ onLoggedOut }>Log Out</button>    
    )
}