import { authService } from "myBase";
import React, { useEffect, useState } from "react";
import Router from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, []);

  return (
    <div className="App">
      {init ? <Router isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initialized..."}
      <footer>
        &copy; {new Date().getFullYear()} hwitter
      </footer>
    </div>
  )
}

export default App;
