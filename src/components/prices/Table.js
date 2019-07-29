import React from "react";
import Tr from "./Tr";

function Table(props) {
  return <table class="pure-table pure-table-bordered">
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
        {props.map(row => (
          <Tr props = {row}></Tr>
        ))
        }
        
      </tbody>
    </table>
}

export default Table;
