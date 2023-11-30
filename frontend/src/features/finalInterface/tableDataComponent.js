// import React from "react";
// import "./tableDataComponent.css";

// const TableDataComponent = (props) => {
//   const tableData = props.rounds.map(({ round, server, client }) => {
//     return (
//       <tr key={round}>
//         <td onMouseEnter={props.handleCellHover} name="#round">
//           {round}
//         </td>

//         {props.nodeLists.map(({ node_id }) => {
//           if (server === node_id) {
//             return (
//               <td
//                 key={node_id}
//                 id={node_id}
//                 name="#node/round"
//                 round={round}
//                 onMouseEnter={props.handleCellHover}
//                 style={{ backgroundColor: "blue" }}
//               ></td>
//             );
//           } else if (client.includes(node_id)) {
//             return (
//               <td
//                 key={node_id}
//                 id={node_id}
//                 name="#node/round"
//                 round={round}
//                 onMouseEnter={props.handleCellHover}
//                 style={{ backgroundColor: "red" }}
//               ></td>
//             );
//           } else {
//             return <td key={node_id}></td>;
//           }
//         })}
//       </tr>
//     );
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Round</th>
//           {props.nodeLists.map(({ node_id }) => (
//             <th
//               name="#head"
//               id={node_id}
//               key={node_id}
//               onMouseEnter={props.handleCellHover}
//             >
//               {node_id}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody> {tableData} </tbody>
//     </table>
//   );
// };

// export default TableDataComponent;

// import React from "react";
// import "tailwindcss/tailwind.css";

// const TableDataComponent = (props) => {
//   const tableData = props.rounds.map(({ round, server, client }) => {
//     return (
//       <tr key={round}>
//         <td
//           onClick={props.handleCellHover}
//           name="#round"
//           className="text-center border-2 border-slate-400 p-4 aspect-w-1 aspect-h-1 font-medium"
//         >
//           {round}
//         </td>

//         {props.nodeLists.map(({ node_id }) => {
//           let cellBgColor = "";
//           if (server === node_id) {
//             cellBgColor = "bg-blue-300";
//           } else if (client.includes(node_id)) {
//             cellBgColor = "bg-green-300";
//           }
//           return (
//             <td
//               key={node_id}
//               id={node_id}
//               name="#node/round"
//               round={round}
//               onClick={props.handleCellHover}
//               className={`text-center border-2 border-slate-400 p-4 aspect-w-1 aspect-h-1 ${cellBgColor}`}
//             ></td>
//           );
//         })}
//       </tr>
//     );
//   });

//   return (
//     <div className="overflow-x-auto">
//       <table className="border-collapse border-2 border-slate-400 w-full table-fixed">
//         <thead>
//           <tr>
//             <th className="text-center border-2 border-slate-400 p-4 aspect-w-1 aspect-h-1 text-xs font-bold">
//               R\N
//             </th>

//             {props.nodeLists.map(({ node_id }) => (
//               <th
//                 name="#head"
//                 id={node_id}
//                 key={node_id}
//                 onClick={props.handleCellHover}
//                 className="text-center border-2 border-slate-400 p-4 aspect-w-1 aspect-h-1 font-medium font-bold"
//               >
//                 {node_id}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className=""> {tableData} </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableDataComponent;

import React from "react";
import "tailwindcss/tailwind.css";

const TableDataComponent = (props) => {
  const tableData = props.rounds.map(({ round, server, client }) => {
    return (
      <tr key={round}>
        <td
          onClick={props.handleCellHover}
          name="#round"
          className="text-center border-2 border-slate-400 font-medium hover:bg-gray-200"
          style={{ height: '6.25vh', width: '6.25vh' }}
        >
          {round}
        </td>

        {props.nodeLists.map(({ node_id }) => {
          let cellBgColor = "";
          let cellTextColor = "text-gray-800";
          if (server === node_id) {
            cellBgColor = "bg-blue-300";
            cellTextColor = "text-white";
          } else if (client.includes(node_id)) {
            cellBgColor = "bg-green-300";
          }
          return (
            <td
              key={node_id}
              id={node_id}
              name="#node/round"
              round={round}
              onClick={props.handleCellHover}
              className={`text-center border-2 border-slate-400 ${cellBgColor} ${cellTextColor} hover:bg-gray-200`}
              style={{ height: '6.25vh', width: '6.25vh' }}
            ></td>
          );
        })}
      </tr>
    );
  });

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border-2 border-slate-400 table-fixed" style={{ margin: '0' }}>
        <thead>
          <tr>
            
            <th className="text-center border-2 border-slate-400 font-bold font-medium bg-gray-200" style={{ height: '6.25vh', width: '6.25vh' }}>
            Round\Node
            </th>
            {props.nodeLists.map(({ node_id }) => (
              <th
                name="#head"
                id={node_id}
                key={node_id}
                onClick={props.handleCellHover}
                className="text-center border-2 border-slate-400 font-medium font-bold bg-gray-200 hover:bg-gray-300"
                style={{ height: '6.25vh', width: '6.25vh' }}
              >
                {node_id}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-100"> {tableData} </tbody>
      </table>
    </div>
  );
};

export default TableDataComponent;
