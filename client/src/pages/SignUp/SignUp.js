import React from "react";
// import style from "./SignUp.module.css";
export default function SignUp() {
  function eyeClick() {
    let pass = document.querySelector("#pass");
    if (pass.type == "password") {
      pass.setAttribute("type", "text");
    } else {
      pass.setAttribute("type", "password");
    }
  }
  var validUser = false;
  var validPass = false;
  var validConfirmPass = false;

  function userValidation() {
    let user = document.querySelector("#user");
    let labelUser = document.querySelector("#label-user");

    if (user.value.length <= 4) {
      labelUser.setAttribute("style", "color: red");
      labelUser.innerHTML = "Username *Insert at least 5 characters";
      user.setAttribute("style", "border-color: red");
      validUser = false;
    } else {
      labelUser.setAttribute("style", "color: green");
      labelUser.innerHTML = "Username";
      user.setAttribute("style", "border-color: green");
      validUser = true;
    }
  }

  function passValidation() {
    let pass = document.querySelector("#pass");
    let labelPass = document.querySelector("#label-pass");

    if (pass.value.length <= 5) {
      labelPass.setAttribute("style", "color: red");
      labelPass.innerHTML = "Password *Insert at least 6 characters";
      pass.setAttribute("style", "border-color: red");
      validPass = false;
    } else {
      if (
        validConfirmPass == true &&
        pass.value != document.querySelector("#confpass").value
      ) {
        labelPass.setAttribute("style", "color: red");
        labelPass.innerHTML = "Password *Passwords do not match";
        pass.setAttribute("style", "border-color: red");
        validPass = false;
      } else {
        labelPass.setAttribute("style", "color: green");
        labelPass.innerHTML = "Password";
        pass.setAttribute("style", "border-color: green");
        validPass = true;
      }
    }
  }

  function confpassValidation() {
    let confirmPass = document.querySelector("#confpass");
    let labelConfirmPass = document.querySelector("#label-confpass");

    if (pass.value != confirmPass.value) {
      labelConfirmPass.setAttribute("style", "color: red");
      labelConfirmPass.innerHTML = "Confirm Password *Passwords do not match";
      confirmPass.setAttribute("style", "border-color: red");
      validConfirmPass = false;
    } else {
      labelConfirmPass.setAttribute("style", "color: green");
      labelConfirmPass.innerHTML = "Confirm Password";
      confirmPass.setAttribute("style", "border-color: green");
      validConfirmPass = true;
    }
  }

  function signUp() {
    let msgError = document.querySelector("#msgError");
    let msgSuccess = document.querySelector("#msgSuccess");
    if (validUser && validPass && validConfirmPass) {
      msgSuccess.setAttribute("style", "display: block");
      msgSuccess.innerHTML = "<strong>Signing Up User...</strong>";
      msgError.setAttribute("style", "display: none");
      msgError.innerHTML = "";

      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } else {
      msgError.setAttribute("style", "display: block");
      msgError.innerHTML =
        "<strong>Please correctly fill out the form before signing up</strong>";
      msgSuccess.innerHTML = "";
      msgSuccess.setAttribute("style", "display: none");
    }
  }
  document.body.style.background =
    "linear-gradient(to right, rgba(166, 192, 254, 0.6), rgba(246, 128, 132, 0.6))";
  return (
    <div className="container mt4">
      <div className="card">
        <h1>Sign Up Form</h1>

        <div id="msgError"></div>
        <div id="msgSuccess"></div>
        <div className="card-body">
          <form action="/auth/signup" method="POST">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="user"
                name="Username"
                autoComplete="username"
                onKeyUp={userValidation}
                required
              />
              <label htmlFor="user" id="label-user" className="form-label">
                Username:
              </label>
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="pass"
                name="Password"
                autoComplete="new-password"
                onKeyUp={passValidation}
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
                name="Confirm Password"
                autoComplete="new-password"
                onKeyUp={confpassValidation}
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
              <button type="button" onClick={signUp}>
                Sign Up
              </button>
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
}
