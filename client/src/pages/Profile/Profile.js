import React from "react";

export default function Profile() {
  document.addEventListener("DOMContentLoaded", () => {
    const selectDrop = document.querySelector("#states");

    fetch("states.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let output = `<option value="" selected>Choose your state...</option>`;
        data.forEach((state) => {
          output += `
        <option value="${state.name}">${state.name}</option>`;
        });
        selectDrop.innerHTML = output;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const zipcode = document.querySelector("#zipcode");

  function submitHandler() {
    if (zipcode.validity.patternMismatch) {
      zipcode.setCustomValidity("Please enter valid zipcode. Examples: 77433 or 77433-0213");
    } else {
      zipcode.setCustomValidity("");
    }
  }

  document.body.style.background =
    "linear-gradient(to right, rgba(172, 203, 238, 0.5), rgba(0, 231, 240, 0.5))";
  return (
    <div className="container mt4">
      <div className="card">
        <h1>Complete Your Profile</h1>
        <div id="msgError"></div>
        <div className="card-body">
          <form action="/" method="POST">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="full-name"
                name="Full name"
                maxLength="50"
                required
              />
              <label htmlFor="user" id="label-fullname" className="form-label">
                Full name:
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="addr1"
                name="Address 1"
                maxLength="100"
                required
              />
              <label htmlFor="addr1" id="label-addr1" className="form-label">
                Address 1:
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="addr2"
                name="Address 2"
                maxLength="100"
              />
              <label htmlFor="addr2" id="label-addr2" className="form-label">
                Address 2 (optional):
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="city"
                name="City"
                maxLength="100"
                required
              />
              <label htmlFor="city" id="label-city" className="form-label">
                City:
              </label>
            </div>

            <div className="form-group">
            <select className="form-control" id="states" required></select>
              <label className="form-label" htmlFor="states" id="label-states">
                State:
              </label>
             
            </div>
            <div className="form-group">
              <input
                type="text"
                pattern="^\d{5}(?:[-\s]\d{4})?$"
                className="form-control"
                id="zipcode"
                name="Zipcode"
                required
              />
              <label htmlFor="zipcode" id="label-zipcode" className="form-label">
                Zipcode:
              </label>
            </div>
            <div className="justify-center">
              <button type="submit" id="submit" onClick={submitHandler}>
                Save
              </button>
            </div>
            <div className="justify-center">
              <hr />
            </div>
          </form>
        </div>

        <a href="/login">Log out</a>
      </div>
    </div>
  );
}
