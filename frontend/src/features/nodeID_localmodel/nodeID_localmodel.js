// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const NodeID_localmodel = (props) => {
//   const [nodeID_localmodel, setnodeID_localmodel] = useState({});

//   useEffect(() => {
//     const fetchNodeID_data = async () => {
//       const response = await axios.get(
//         `http://${props.ip}:3111/nodeIDLocalModel`
//       );
//       console.log("response for localmodel", response.data);
//       const roundData = response.data.find((object) => {
//         return object.round === parseInt(props.round, 10);
//       });
//       console.log("roundData", roundData);
//       setnodeID_localmodel(roundData ? roundData : {});
//     };
//     fetchNodeID_data();
//   }, [props.ip, props.round]);

//   return (
//     <div>
//       <h1>NodeID_localModel</h1>
//       <div>
//         {Object.keys(nodeID_localmodel).length > 0 ? (
//           <div>
//             <h2>round: {nodeID_localmodel.round}</h2>
//             <p>training_time: {nodeID_localmodel.training_time}</p>
//             <p>model_size: {nodeID_localmodel.model_size}</p>
//             <p>local_model: {nodeID_localmodel.local_model}</p>
//             <p>upload_latency: {nodeID_localmodel.upload_latency}</p>
//           </div>
//         ) : (
//           <h2>Computing....</h2>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NodeID_localmodel;

import React, { useState, useEffect } from "react";
import axios from "axios";

const NodeIDLocalModel = (props) => {
  const [nodeIDLocalModel, setNodeIDLocalModel] = useState({});

  useEffect(() => {
    const fetchNodeIDData = async () => {
      const response = await axios.get(
        `http://${props.ip}:${props.port}/nodeIDLocalModel`
      );
      console.log("response for localmodel", response.data);
      const roundData = response.data.find((object) => {
        return object.round === parseInt(props.round, 10);
      });
      console.log("roundData", roundData);
      setNodeIDLocalModel(roundData ? roundData : {});
    };
    fetchNodeIDData();
  }, [props.ip, props.round]);

  return (
    <div className="max-w-md mx-auto rounded-md shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-4">
        <h2 className="text-lg font-bold text-white">Node - Local Model</h2>
        <div className="text-gray-200 text-sm font-bold">
          {Object.keys(nodeIDLocalModel).length > 0 ? (
            <div>
              <p>Round: {nodeIDLocalModel.round}</p>
              <p>Training Time: {nodeIDLocalModel.training_time}</p>
              <p>Model Size: {nodeIDLocalModel.model_size}</p>
              <p>Local Model: {nodeIDLocalModel.local_model}</p>
              <p>Upload Latency: {nodeIDLocalModel.upload_latency}</p>
            </div>
          ) : (
            <h2 className="text-lg font-bold">No Data</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default NodeIDLocalModel;
