import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";

function AppRouter() {
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
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/about/" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
