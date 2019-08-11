import React, { Component } from "react";
import Table from "./Table";
import socketIOClient from "socket.io-client";
const price_generator = require("../../util/mock/prices_generator");

const websocket_server = "http://127.0.0.1:4242";

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
    const socket = socketIOClient(websocket_server);
    //socket.on("prices-API", data => console.log(data.length));
    socket.on("prices-API", data => {
      this.setState({ prices: JSON.parse(data) });
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
