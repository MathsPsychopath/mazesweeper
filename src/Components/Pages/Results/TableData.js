import React from "react";

export default function TableData(props) {
  return (
    <tr>
      <td>
        <h1 className="text-left pl-4 py-2 pl-4">{props.metric}</h1>
      </td>
      <td>
        <p className="text-left pl-4">{props.metricData}</p>
      </td>
    </tr>
  );
}
