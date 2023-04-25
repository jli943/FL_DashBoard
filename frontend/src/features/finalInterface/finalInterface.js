import React, { useState, useEffect } from "react";
import axios from "axios";
import PlotComponent from "./plot";

const FinalInterface = () => {
  const [edgeClientList, setEdgeClientList] = useState({});
  const [globalModel, setGlobalModel] = useState({});

  useEffect(() => {
    const fetchEdgeClientList = async () => {
      const response = await axios.get("http://localhost:3111/edgeClientList");
      setEdgeClientList(response.data);

      if (response.data.rounds.length === 5) {
        clearInterval(liveUpdateEdgeClientList);
      }
    };

    const liveUpdateEdgeClientList = setInterval(fetchEdgeClientList, 3000);

    const fetchGlobalModel = async () => {
      const response = await axios.get("http://localhost:3111/globalModel");
      setGlobalModel(response.data);

      if (response.data.length === 5) {
        clearInterval(liveUpdateGlobalModel);
      }
    };

    const liveUpdateGlobalModel = setInterval(fetchGlobalModel, 3000);
  }, []);

  return (
    <div>
      <PlotComponent
        edgeClientList={edgeClientList}
        globalModel={globalModel}
      />
    </div>
  );
};

export default FinalInterface;
