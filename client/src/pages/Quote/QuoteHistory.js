import React from "react";

export default function QuoteHistory() {
  document.body.style.backgroundImage =
    "linear-gradient(to right, rgba(94, 231, 223, 0.5), rgba(180, 144, 202, 0.5))";
  return (
    <div className="container mt4">
      <div className="card">
        <h1>Fuel Quote History</h1>
        <div className="card-body">
          <table
            data-toggle="table"
            data-url="data1.json"
            data-pagination="true"
            data-search="true"
          >
            <thead>
              <tr>
                <th data-field="gallons">Gallons Requested</th>
                <th data-field="deli-addr">Delivery Address</th>
                <th data-field="date">Delivery Date</th>
                <th data-field="price">Price per gallon ($)</th>
                <th data-field="total">Total Amount Due ($)</th>
              </tr>
            </thead>
          </table>

          <div className="justify-center">
            <button type="submit">Go back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
