import { Route, Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../pages/Login/Login.js";

const PrivateRoute = ({ isAuthenticated }) =>{
  return isAuthenticated ? <Outlet /> : <Login />;
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
