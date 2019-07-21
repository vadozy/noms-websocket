import React, { Component } from "react";
// import Table from "./Table";

class Prices extends Component {
  state = {
    prices: [
      {
        symbol: "ABC1",
        currency: "USD",
        close: 300,
        open: 250,
        price: 276.93,
        vwap: 266.1
      },
      {
        symbol: "ABC2",
        currency: "USD",
        close: 300,
        open: 250,
        price: 265.17,
        vwap: 280.73
      }
    ]
  };

  render() {
    return (
      <>
        <div>TODO</div>
      </>
    );
  }
}

export default Prices;
