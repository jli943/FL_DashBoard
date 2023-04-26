// const GlobalModelTable = (props) => {
//   return Object.keys(props.roundDatainGlobalModel).length > 0 ? (
//     <div>
//       <h2>Round: {props.roundDatainGlobalModel.round}</h2>
//       <p>Aggregation Time: {props.roundDatainGlobalModel.aggregation_time}</p>
//       <p>Model Size: {props.roundDatainGlobalModel.model_size}</p>
//       <p>Model: {props.roundDatainGlobalModel.model}</p>
//       <p>Download Latency: {props.roundDatainGlobalModel.download_latency}</p>
//     </div>
//   ) : (
//     <h2>Computing....</h2>
//   );
// };

// export default GlobalModelTable;

import React from "react";

const GlobalModelTable = (props) => {
  return Object.keys(props.roundDatainGlobalModel).length > 0 ? (
    <div className="max-w-md mx-auto rounded-md shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Global Model</h2>
        </div>
        <div className="text-gray-200 text-sm font-bold">
          <p> Round: {props.roundDatainGlobalModel.round} </p>
          <p>
            Aggregation Time: {props.roundDatainGlobalModel.aggregation_time}
          </p>
          <p>Model Size: {props.roundDatainGlobalModel.model_size}</p>
          <p>Model: {props.roundDatainGlobalModel.model}</p>
          <p>
            Download Latency: {props.roundDatainGlobalModel.download_latency}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <h2 className="text-lg font-bold">Computing....</h2>
  );
};

export default GlobalModelTable;
