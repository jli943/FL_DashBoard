import React from "react";

const TableDataComponent = (props) => {
  const tableData = props.rounds.map(({ round, server, client }) => {
    return (
      <tr key={round}>
        <td onMouseEnter={props.handleCellHover} name="#round">
          {round}
        </td>

        {props.nodeLists.map(({ node_id }) => {
          if (server === node_id) {
            return (
              <td
                key={node_id}
                id={node_id}
                name="#node/round"
                round={round}
                onMouseEnter={props.handleCellHover}
                style={{ backgroundColor: "blue" }}
              ></td>
            );
          } else if (client.includes(node_id)) {
            return (
              <td
                key={node_id}
                id={node_id}
                name="#node/round"
                round={round}
                onMouseEnter={props.handleCellHover}
                style={{ backgroundColor: "red" }}
              ></td>
            );
          } else {
            return <td key={node_id}></td>;
          }
        })}
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Round</th>
          {props.nodeLists.map(({ node_id }) => (
            <th
              name="#head"
              id={node_id}
              key={node_id}
              onMouseEnter={props.handleCellHover}
            >
              {node_id}
            </th>
          ))}
        </tr>
      </thead>
      <tbody> {tableData} </tbody>
    </table>
  );
};

export default TableDataComponent;
