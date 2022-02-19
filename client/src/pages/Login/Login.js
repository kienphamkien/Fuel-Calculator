import React from "react";
// import style from "./Login.module.css";
export default function Login() {
  function eyeClick() {
    let pass = document.querySelector("#password");
    if (pass.type == "password") {
      pass.setAttribute("type", "text");
    } else {
      pass.setAttribute("type", "password");
    }
  }
  document.body.style.backgroundImage =
    "url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg')";
  return (
    <div className="container mt4">
      <div className="card">
        <h1>Login</h1>
        <div className="card-body">
          <form action="/auth/login" method="POST">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                name="Username"
                autoComplete="username"
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
                name="Password"
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
}
