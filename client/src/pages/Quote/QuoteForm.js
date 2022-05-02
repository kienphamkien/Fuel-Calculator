import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import { load_user_profile } from "../../actions/profile";
import { connect } from "react-redux";
import axios from "axios";

const Quote = ({
  address1_global,
  city_global,
  state_global,
  zipcode_global,
}) => {
  const [date, onChange] = useState(new Date());
  function dateUpdate() {
    let labelDate = document.querySelector("#label-date");
    if (date != null) {
      labelDate.style.color = "green";
      labelDate.style.fontWeight = "bold";
    } else {
      labelDate.style.color = "red";
      labelDate.style.fontWeight = "normal";
    }
  }
  const address =
    address1_global +
    ", " +
    city_global +
    ", " +
    state_global +
    " " +
    zipcode_global;

  const [gallons, setGallons] = useState("");
  const [quoteButton, setQuoteButton] = useState(true);
  const [submitButton, setSubmitButton] = useState(true);
  const [price, setPrice] = useState("");
  const [amountDue, setAmountDue] = useState("");
  const [currentGallons, setCurrentGallons] = useState("");

  const gallonsChange = (e) => {
    if (address1_global == "") {
      alert("Please complete your profile first before requesting a quote.")
    }
    if (e.target.value == "" || address1_global == "") {
      setQuoteButton(true);
      setSubmitButton(true);
    } else {
      setQuoteButton(false);
    }
    setGallons(e.target.value);
  };

  const get_quote = () => {
    setSubmitButton(false);
    setCurrentGallons(gallons);
    const data = JSON.stringify({
      gallons: gallons,
    });

    const config = {
      method: "put",
      url: `${process.env.REACT_APP_API_URL}/accounts/getprice`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        setPrice(res.data["price"]);
        setAmountDue(res.data["amount_due"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formatDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    if (
      confirm(
        `Quote confirmation: \n Gallons Requested:  ${currentGallons} \n Delivery Address: ${address} \n Delivery Date: ${formatDate} \n Suggested Price/gallon: ${price} \n Total Amount Due: ${amountDue}  \n Do you want to submit this quote?`
      ) == true
    ) {
 

      const data = JSON.stringify({
        gallons: currentGallons,
        delivery_address: address,
        delivery_date: formatDate,
        price: price,
        amount_due: amountDue
      });


    const config = {
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/accounts/fuelquotes`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
      alert("Your quote has been submitted.")

    } else {
      alert("Your quote has been cancelled.")
    }
  };

  document.body.style.background =
    "linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))";
  return (
    <div className="container mt4">
      <div className="card">
        <h1>Quote Form</h1>
        <div id="msgError"></div>
        <div className="card-body" onMouseOver={dateUpdate}>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="gallons"
                name="gallons"
                min="1"
                onChange={(e) => gallonsChange(e)}
                value={gallons}
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
            <DatePicker id="date" onChange={onChange} minDate={new Date()} value={date} required />

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="price"
                name="Suggested Price"
                value={price}
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
                value={amountDue}
                readOnly
              />
              <label htmlFor="total" id="label-total" className="form-label">
                Total Amount Due:
              </label>
            </div>
            <div className="justify-center">
              <button
                type="button"
                id="get-quote"
                disabled={quoteButton}
                onClick={get_quote}
              >
                Get quote
              </button>
              <div className="px-5"></div>
              <button type="submit" id="submit" disabled={submitButton}>
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
};
const mapStateToProps = (state) => ({
  address1_global: state.profile.address1,
  city_global: state.profile.city,
  state_global: state.profile.state,
  zipcode_global: state.profile.zipcode,
});

export default connect(mapStateToProps, { load_user_profile })(Quote);
