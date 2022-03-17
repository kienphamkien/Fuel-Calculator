import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";
import { load_user_profile } from "../actions/profile";

const Layout = (props) => {
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user_profile()
    props.load_user();
  }, []);
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};
export default connect(null, { checkAuthenticated, load_user, load_user_profile })(Layout);