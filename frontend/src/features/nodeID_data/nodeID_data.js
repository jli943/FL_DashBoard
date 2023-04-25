import React, { useState, useEffect } from "react";
import axios from "axios";

const NodeID_data = (props) => {
  const [nodeID_data, setNodeID_data] = useState({});

  useEffect(() => {
    const fetchNodeID_data = async () => {
      const response = await axios.get(`http://${props.ip}:3111/nodeIDData`);
      console.log("response", response.data);
      setNodeID_data(response.data ? response.data : {});
    };
    fetchNodeID_data();
    console.log("nodeID_data", nodeID_data);
  }, [props.ip]);

  return (
    <div>
      <h1>NodeID_data</h1>
      <div>
        {Object.keys(nodeID_data).length > 0 ? (
          <div>
            <h2>node_id: {nodeID_data.node_id}</h2>
            <p>class_names: {nodeID_data.class_names}</p>
          </div>
        ) : (
          <h2>Computing....</h2>
        )}
      </div>
    </div>
  );
};

export default NodeID_data;
