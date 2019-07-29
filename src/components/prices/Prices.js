import React, { Component } from "react";
import Table from "./Table";
const price_generator = require("../../util/mock/prices_generator");

class Prices extends Component {
  state = {
    prices: []
  };

  componentDidMount() {
    this.setState({
      prices: price_generator()
    });
    setInterval(() => {
      this.setState({
        prices: price_generator()
      });
    }, 2000);
  }
  render() {
    return (
      <>
        <div className="header">
          <h2>WebSocket demo</h2>
          <h1>NOMS real-time prices</h1>
        </div>
        <main>
          <Table prices={this.state.prices} />
        </main>
      </>
    );
  }
}

export default Prices;
