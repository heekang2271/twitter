import { authService } from "myBase";
import React, { useEffect, useState } from "react";
import Router from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, []);

  return (
    <div className="App">
      {init ? <Router isLoggedIn={isLoggedIn} /> : "Initialized..."}
      <footer>
        &copy; {new Date().getFullYear()} hwitter
      </footer>
    </div>
  )
}

export default App;
