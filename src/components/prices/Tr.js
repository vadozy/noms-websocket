import React, { Component } from "react";

class Tr extends Component {
  render() {
    return <tr>
        <td>{this.props.symbol}</td>
        <td className="money">{this.props.currency}</td>
        <td className="money">{this.props.close.toFixed(2)}</td>
        <td className="money">{this.props.open.toFixed(2)}</td>
        <td className="money">{this.props.price.toFixed(2)}</td>
        <td className="money">{this.props.vwap.toFixed(2)}</td>
    </tr>;
  }
}

export default Tr;
