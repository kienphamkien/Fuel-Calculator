import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import { load_user_profile, update_profile } from "../../actions/profile";
import { connect } from "react-redux";

const Profile = ({address1_global, city_global, state_global, zipcode_global}) => {
  const [value, onChange] = useState(new Date());
  function dateUpdate() {
    let labelDate = document.querySelector("#label-date");
    if (value != null) {
        labelDate.style.color = "green";
        labelDate.style.fontWeight = "bold";
    } else {
        labelDate.style.color = "red";
        labelDate.style.fontWeight = "normal";
    }
  }
  const address = address1_global + ', ' + city_global + ', ' + state_global + ' ' + zipcode_global

  document.body.style.background =
    "linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))";
  return (
    <div className="container mt4">
      <div className="card">
        <h1>Quote Form</h1>
        <div id="msgError"></div>
        <div className="card-body" onMouseOver={dateUpdate}>
          <form action="/" method="POST">
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="gallons"
                name="Gallons Requested"
                min="1"
                required
              />
              <label htmlFor="user" id="label-fullname" className="form-label">
                Gallons Requested:
              </label>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                id="deli-addr"
                name="Delivery Address"
                value={address}
                readOnly
              />
              <label
                htmlFor="deli-addr"
                id="label-deliaddr"
                className="form-label"
              >
                Delivery Address:
              </label>
            </div>
          
              <label htmlFor="date" id="label-date" className="form-label me-3">
                Delivery Date:
              </label>
              <DatePicker
                id="date"
                onChange={onChange}
                value={value}
                required
              />
         
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="price"
                name="Suggested Price"
                readOnly
              />
              <label htmlFor="price" id="label-price" className="form-label">
                Suggested Price/gallon:
              </label>
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="total"
                name="Total Amount Due"
                readOnly
              />
              <label htmlFor="total" id="label-total" className="form-label">
                Total Amount Due:
              </label>
            </div>
            <div className="justify-center">
              <button type="button" id="get-quote">
                Get quote
              </button>
              <div className="px-5"></div>
              <button type="submit" id="submit">
                Submit
              </button>
            </div>
            <div className="justify-center">
              <hr />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  address1_global: state.profile.address1,
  city_global: state.profile.city,
  state_global: state.profile.state,
  zipcode_global: state.profile.zipcode,
});

export default connect(mapStateToProps, { load_user_profile })(
  Profile
);