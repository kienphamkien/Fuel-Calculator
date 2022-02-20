import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "./custom.scss";
const bootstrap = require("bootstrap");
const table = require("bootstrap-table");

import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile"
import Quote from "./pages/Quote/QuoteForm"
import History from "./pages/Quote/QuoteHistory"
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Login />} />
          <Route path="/quote-form" element={<Quote />} />
          <Route path="/quote-history" element={<History />} />
        </Routes>
      </Router>
  );
}

export default App;