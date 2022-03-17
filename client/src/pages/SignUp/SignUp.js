import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
// import style from "./SignUp.module.css";

const SignUp = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [validUser, setValidUser] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [validConfPass, setValidConfPass] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });
  
  const { username, email, password, re_password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (accountCreated) {
    return <Navigate to="/login" />;
  }

  function eyeClick() {
    let pass = document.querySelector("#pass");
    if (pass.type == "password") {
      pass.setAttribute("type", "text");
    } else {
      pass.setAttribute("type", "password");
    }
  }

  function userValidation() {
    let user = document.querySelector("#user");
    let labelUser = document.querySelector("#label-user");
    if (user.value.length <= 4) {
      labelUser.setAttribute("style", "color: red");
      labelUser.innerHTML = "Username *Insert at least 5 characters:";
      user.setAttribute("style", "border-color: red");
      setValidUser(false);
    } else {
      labelUser.setAttribute("style", "color: green");
      labelUser.innerHTML = "Username:";
      user.setAttribute("style", "border-color: green");
      setValidUser(true);
    }
  }

  function passValidation() {
    let pass = document.querySelector("#pass");
    let labelPass = document.querySelector("#label-pass");

    if (pass.value.length <= 5) {
      labelPass.setAttribute("style", "color: red");
      labelPass.innerHTML = "Password *Insert at least 6 characters:";
      pass.setAttribute("style", "border-color: red");
    } else {
      if (
        validConfPass == true &&
        pass.value != document.querySelector("#confpass").value
      ) {
        labelPass.setAttribute("style", "color: red");
        labelPass.innerHTML = "Password *Passwords do not match:";
        pass.setAttribute("style", "border-color: red");
        setValidPass(false);
      } else {
        labelPass.setAttribute("style", "color: green");
        labelPass.innerHTML = "Password:";
        pass.setAttribute("style", "border-color: green");
        setValidPass(true);
      }
    }
  }

  function confpassValidation() {
    let pass = document.querySelector("#pass");
    let confirmPass = document.querySelector("#confpass");
    let labelConfirmPass = document.querySelector("#label-confpass");

    if (pass.value != confirmPass.value) {
      labelConfirmPass.setAttribute("style", "color: red");
      labelConfirmPass.innerHTML = "Confirm Password *Passwords do not match:";
      confirmPass.setAttribute("style", "border-color: red");
      setValidConfPass(false);
    } else {
      labelConfirmPass.setAttribute("style", "color: green");
      labelConfirmPass.innerHTML = "Confirm Password:";
      confirmPass.setAttribute("style", "border-color: green");
      setValidConfPass(true);
    }
  }
  document.body.style.background =
    "linear-gradient(to right, rgba(166, 192, 254, 0.6), rgba(246, 128, 132, 0.6))";

  const onSubmit = (e) => {
    e.preventDefault();
    let msgError = document.querySelector("#msgError");
    let msgSuccess = document.querySelector("#msgSuccess");
    if (validUser && validPass && validConfPass) {
      msgSuccess.setAttribute("style", "display: block");
      msgSuccess.innerHTML = "<strong>Sending verification email...</strong>";
      msgError.setAttribute("style", "display: none");
      msgError.innerHTML = "";
      alert("Please check your email to verify your account.");
      setTimeout(function () {
        signup(username, email, password, re_password);
        setAccountCreated(true);
      }, 2000);
    } else {
      alert("Please correctly fill out the form before signing up")
      msgError.setAttribute("style", "display: block");
      msgError.innerHTML =
        "<strong>Please correctly fill out the form before signing up</strong>";
      msgSuccess.innerHTML = "";
      msgSuccess.setAttribute("style", "display: none");
    }
  };

  return (
    <div className="container">
      <div className="card signup">
        <h1>Sign Up Form</h1>

        <div id="msgError"></div>
        <div id="msgSuccess"></div>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="user"
                name="username"
                autoComplete="username"
                onKeyUp={userValidation}
                value={username}
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="user" id="label-user" className="form-label">
                Username:
              </label>
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="email" id="label-email" className="form-label">
                Email:
              </label>
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="pass"
                name="password"
                autoComplete="new-password"
                value={password}
                onKeyUp={passValidation}
                minLength="6"
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="pass" id="label-pass" className="form-label">
                Password:
              </label>
              <i
                className="fa fa-eye"
                aria-hidden="true"
                onClick={eyeClick}
              ></i>
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="confpass"
                name="re_password"
                autoComplete="new-password"
                onKeyUp={confpassValidation}
                value={re_password}
                minLength="6"
                onChange={(e) => onChange(e)}
                required
              />
              <label
                htmlFor="conf-pass"
                id="label-confpass"
                className="form-label"
              >
                Confirm Password:
              </label>
            </div>
            <div className="justify-center">
              <button type="submit">Sign Up</button>
            </div>
            <div className="justify-center">
              <hr />
            </div>
          </form>
        </div>
        <p>
          Already have an account? <a href="/login">Login here!</a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(SignUp);
