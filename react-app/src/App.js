import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";

import Services from "./pages/Services";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Services />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
