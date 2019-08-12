import React, { Component } from "react";
import Table from "./Table";
import io from 'socket.io-client';
const price_generator = require("../../util/mock/prices_generator");

class Prices extends Component {
  state = {
    prices: []
  };

  componentDidMount2() {
    this.setState({
      prices: price_generator()
    });
    setInterval(() => {
      this.setState({
        prices: price_generator()
      });
      setTimeout(() => {
        this.setState({...this.state});
      }, 9000);
    }, 10000);
  }

  componentDidMount() {
    const socket = io('http://localhost:4242');
    socket.on('prices-API', data => {
      //console.log(data);
      this.setState({
        prices: JSON.parse(data)
      });
      setTimeout(() => {
        this.setState({...this.state});
      }, 9000);
    });
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
