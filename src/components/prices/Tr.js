import React, { Component } from "react";

class Tr extends Component {
  previous_row = null;

  render() {
    const row = this.props;

    const price_class = calc_animation_class("price", this.previous_row, row);
    const vwap_class = calc_animation_class("vwap", this.previous_row, row);

    this.previous_row = { ...row };

    return (
      <tr>
        <td>{row.symbol}</td>
        <td className="money">{row.currency}</td>
        <td className="money">{row.close}</td>
        <td className="money">{row.open}</td>
        <td className={"money " + price_class}>{row.price}</td>
        <td className={"money " + vwap_class}>{row.vwap}</td>
      </tr>
    );
  }
}

function calc_animation_class(prop, prev_row, row) {
  if (prev_row) {
    if (row[prop] > prev_row[prop]) {
      return "price-up";
    }

    if (row[prop] < prev_row[prop]) {
      return "price-down";
    }
  }

  return "";
}

export default Tr;
