import React, { useState, useEffect } from "react";
import axios from "axios";

const NodeID_data = (props) => {
  const [nodeID_data, setNodeID_data] = useState({});

  useEffect(() => {
    const fetchNodeID_data = async () => {
      const response = await axios.get(
        `http://${props.ip}:${props.port}/nodeIDData`
      );
      console.log("response", response.data);
      setNodeID_data(response.data ? response.data : {});
    };
    fetchNodeID_data();
    console.log("nodeID_data", nodeID_data);
  }, [props.ip]);

  return (
    <div className="max-w-md mx-auto rounded-md shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4">
        <h1 className="text-2xl font-bold text-white">NodeID_data</h1>
        <div className="text-gray-200 text-sm">
          {Object.keys(nodeID_data).length > 0 ? (
            <div>
              <h2 className="text-lg font-bold mb-2">
                node_id: {nodeID_data.node_id}
              </h2>
              <p className="mb-4">class_names: {nodeID_data.class_names}</p>
            </div>
          ) : (
            <h2 className="text-lg font-bold">Computing....</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default NodeID_data;
