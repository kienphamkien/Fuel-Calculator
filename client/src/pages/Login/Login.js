import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
// import style from "./Login.module.css";

const Login = ({ login, isAuthenticated }) => {
  function eyeClick() {
    let pass = document.querySelector("#password");
    if (pass.type == "password") {
      pass.setAttribute("type", "text");
    } else {
      pass.setAttribute("type", "password");
    }
  }
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  
  document.body.style.backgroundImage =
    "linear-gradient(to right, rgba(161, 140, 209, 0.5), rgba(251, 194, 235, 0.5))";
  return (
    <div className="container mt4">
      <div className="card">
        <h1>Login</h1>
        <div className="card-body">
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                autoComplete="username"
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="username" className="form-label">
                Username:
              </label>
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                minLength="6"
                onChange={(e) => onChange(e)}
                autoComplete="current-password"
                required
              />
              <label htmlFor="password" className="form-label">
                Password:
              </label>

              <i
                className="fa fa-eye"
                aria-hidden="true"
                onClick={eyeClick}
              ></i>
            </div>
            <div className="justify-center">
              <button type="submit">Login</button>
            </div>
            <div className="justify-center">
              <hr />
            </div>
          </form>
        </div>
        <p>
          Don't have an account? <a href="/Signup">Register here!</a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
