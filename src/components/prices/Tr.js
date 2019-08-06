import React, { Component } from "react";

class Tr extends Component {

  prev = null; 

  render() {

    let price_class = "money";
    let vwap_class = "money";

    price_class = calculate_class(this.prev, this.props, 'price');
    vwap_class = calculate_class(this.prev, this.props, 'vwap');

    this.prev = this.props;

    return <tr>
        <td>{this.props.symbol}</td>
        <td className="money">{this.props.currency}</td>
        <td className="money">{this.props.close.toFixed(2)}</td>
        <td className="money">{this.props.open.toFixed(2)}</td>
        <td className={price_class}>{this.props.price.toFixed(2)}</td>
        <td className={vwap_class}>{this.props.vwap.toFixed(2)}</td>
    </tr>;
  }

}

export default Tr;

function calculate_class(prev, props, field) {

  let return_value = "money"

  if (prev !== null) {
    
    if (prev[field]> props[field]) {
      return_value += " price-down";
    } else if (prev[field] < props[field]) {
      return_value += " price-up";
    }
  }

  return return_value;
}