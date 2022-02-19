import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "./custom.scss";
const bootstrap = require("bootstrap");
import Login from "./pages/Login/Login.js";
import SignUp from "./pages/SignUp/SignUp.js";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    // <Login />
  );
}

export default App;