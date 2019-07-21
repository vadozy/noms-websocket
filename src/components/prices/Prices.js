import React, { Component } from "react";
import Table from "./Table";

const generate_prices = require("../../util/mock/prices_generator");

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

  timer_id = null;

  componentDidMount() {
    this.timer_id = setInterval(() => {
      this.setState({ prices: generate_prices() });
      setTimeout(() => {
        this.setState({ prices: [...this.state.prices] });
      }, 3000);
    }, 3500);
  }

  componentWillUnmount() {
    clearTimeout(this.timer_id);
    this.timer_id = null;
  }

  render() {
    const { prices } = this.state;
    return (
      <>
        <div className="header">
          <h2>WebSocket demo</h2>
          <h1>NOMS real-time prices</h1>
        </div>
        <main>
          <Table prices={prices} />
        </main>
      </>
    );
  }
}

export default Prices;
