import React, { useEffect, useState } from "react";
import axios from "axios";

export default function QuoteHistory() {
  document.body.style.backgroundImage =
    "linear-gradient(to right, rgba(94, 231, 223, 0.5), rgba(180, 144, 202, 0.5))";
  const [history, setHistory] = useState([]);
  const [msg, setMsg] = useState("");

  const quote_history = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}/accounts/fuelquotes`, config)
      .then((res) => {
        if (res.data.length == 0) {
          setMsg("You do not have any quote yet.");
        } else {
          setHistory(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  useEffect(() => {
    quote_history();
    DisplayData;
  }, []);

  const DisplayData = history.map((row) => {
      return (
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.gallons}</td>
          <td>{row.delivery_address}</td>
          <td>{row.delivery_date}</td>
          <td>{row.price}</td>
          <td>{row.amount_due}</td>
        </tr>
      );
  });

  return (
    <div className="container mt4">
      <div className="card">
        <h1>Fuel Quote History</h1>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Quote ID</th>
                <th>Gallons Requested</th>
                <th>Delivery Address</th>
                <th>Delivery Date</th>
                <th>Price per gallon ($)</th>
                <th>Total Amount Due ($)</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
          <p>{msg}</p>
          <div className="justify-center">
            <button type="submit">Go back</button>
          </div>
        </div>
      </div>
    </div>
  );
}