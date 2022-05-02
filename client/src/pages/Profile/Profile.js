import React, { useState, useEffect } from "react";
import statesJson from "./states";
import { load_user_profile, update_profile } from "../../actions/profile";
import { connect } from "react-redux";

const Profile = ({
  full_name_global,
  address1_global,
  address2_global,
  city_global,
  state_global,
  zipcode_global,
  update_profile,
}) => {
  let data = statesJson["data"];
  var output = "";
  output = `<option value="" selected>Choose your state...</option>`;
  data.forEach((state) => {
    output += `
        <option value="${state.abbreviation}">${state.name}</option>`;
  });
  const [profileText, setProfileText] = useState("Complete Your Profile");

  const [formData, setFormData] = useState({
    full_name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const { full_name, address1, address2, city, state, zipcode } = formData;

  useEffect(() => {
    document.querySelector("#states").innerHTML = output;
    console.log(full_name_global)
    if (full_name_global.length != 0) {
      setProfileText("My Profile");
    }
    setFormData({
      full_name: full_name_global,
      address1: address1_global,
      address2: address2_global,
      city: city_global,
      state: state_global,
      zipcode: zipcode_global,
    });
  }, [full_name_global]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    update_profile(full_name, address1, address2, city, state, zipcode);
    setTimeout(function () {
      window.location.reload();
    }, 1000);
    alert("Your profile has been updated!");
    

  };

  function submitHandler() {
    if (!/^\d{5}(?:[-\s]\d{4})?$/.test(zipcode)) {
      alert("Please enter a valid zipcode. Example: 77093 or 77449-2243");
    }
  }

  document.body.style.background =
    "linear-gradient(to right, rgba(172, 203, 238, 0.5), rgba(0, 231, 240, 0.5))";
  return (
    <div className="container">
      <div className="card">
        <h1>{profileText}</h1>
        <div id="msgError"></div>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="full-name"
                name="full_name"
                maxLength="50"
                placeholder={`${full_name_global}`}
                onChange={(e) => onChange(e)}
                value={full_name}
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
                name="address1"
                maxLength="100"
                onChange={(e) => onChange(e)}
                value={address1}
                placeholder={`${address1_global}`}
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
                name="address2"
                maxLength="100"
                onChange={(e) => onChange(e)}
                value={address2}
                placeholder={`${address2_global}`}
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
                name="city"
                maxLength="100"
                onChange={(e) => onChange(e)}
                value={city}
                placeholder={`${city_global}`}
                required
              />
              <label htmlFor="city" id="label-city" className="form-label">
                City:
              </label>
            </div>

            <div className="form-group">
              <select
                className="form-control states"
                id="states"
                placeholder={`${state_global}`}
                onChange={(e) => onChange(e)}
                name="state"
                value={state}
                required
              ></select>
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
                name="zipcode"
                placeholder={`${zipcode_global}`}
                onChange={(e) => onChange(e)}
                value={zipcode}
                required
              />
              <label
                htmlFor="zipcode"
                id="label-zipcode"
                className="form-label"
              >
                Zipcode:
              </label>
            </div>
            <div className="justify-center">
              <button type="submit" id="submit" onClick={submitHandler}>
                Save
              </button>
            </div>
            <div className="justify-center"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  full_name_global: state.profile.full_name,
  address1_global: state.profile.address1,
  address2_global: state.profile.address2,
  city_global: state.profile.city,
  state_global: state.profile.state,
  zipcode_global: state.profile.zipcode,
});

export default connect(mapStateToProps, { load_user_profile, update_profile })(
  Profile
);