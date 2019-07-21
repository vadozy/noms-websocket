import React from "react";
import Tr from "./Tr";

function Table(props) {
  const prices = props.prices;

  return (
    <table className="pure-table pure-table-bordered">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Currency</th>
          <th>Close</th>
          <th>Open</th>
          <th>Price</th>
          <th>VWAP</th>
        </tr>
      </thead>

      <tbody>
        {prices.map(row => (
          <Tr key={row.symbol} {...row} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
