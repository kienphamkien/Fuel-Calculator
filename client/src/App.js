import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./custom.scss";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Quote from "./pages/Quote/QuoteForm";
import History from "./pages/Quote/QuoteHistory";
import store from "./store";
import { Provider } from "react-redux";
import Layout from "./hocs/Layout";
import Activate from "./pages/Activate";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home/Home.js"
// import { connect } from "react-redux";

const bootstrap = require("bootstrap");
const bstable = require("bootstrap-table");

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/activate/:uid/:token" element={<Activate />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/quote-form" element={<Quote />} />
              <Route path="/quote-history" element={<History />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
