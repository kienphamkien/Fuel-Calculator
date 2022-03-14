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
import store from "./store";
import { Provider } from "react-redux";
import Layout from "./hocs/Layout";
import Activate from "./pages/Activate"


// function App() {
//   return (
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/" element={<Login />} />
//           <Route path="/quote-form" element={<Quote />} />
//           <Route path="/quote-history" element={<History />} />
//         </Routes>
//       </Router>
//   );
// }

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
      </Layout>
    </Router>
  </Provider>
);

export default App;