import React, { useState, useMemo } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { UserContext } from "./UserContext";
// import { login } from "./utils/login";
function AppRouter() {
  const [user, setUser] = useState(null);

  // usememo for more complex apps
  // to create waht the value is
  // it prevents providerValue from chaning
  // unless value,setvalue changes
  const value = useMemo(
    () => ({
      // object
      user,
      setUser
    }),
    [user, setUser]
  );
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/about/" element={<About />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
