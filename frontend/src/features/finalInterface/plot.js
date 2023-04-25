import React, { useState, useEffect } from "react";
import ModalComponent from "./modalComponent";
import TableDataComponent from "./tableDataComponent";

const PlotComponent = (props) => {
  const [rounds, setRounds] = useState([]);
  const [nodeLists, setNodeLists] = useState([]);
  const [globalModel, setGlobalModel] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalStyle, setModalStyle] = useState({});
  const [roundDatainGlobalModel, setRoundDatainGlobalModel] = useState({});
  const [nodeIP, setNodeIP] = useState("");
  const [cellName, setCellName] = useState("");
  const [cellRound, setCellRound] = useState("");

  useEffect(() => {
    if (Object.keys(props.edgeClientList).length > 0) {
      console.log("props.edge", props.edgeClientList);
      setRounds(props.edgeClientList.rounds);
      setNodeLists(props.edgeClientList.node_list);
    }
  }, [props.edgeClientList]);

  useEffect(() => {
    if (props.globalModel.length > 0) {
      console.log("props.globalModel", props.globalModel);
      setGlobalModel(props.globalModel);
    }
  }, [props.globalModel]);

  const handleCellHover = (event) => {
    const cell = event.target;
    console.log("id", cell.getAttribute("id"));
    console.log("round", cell.getAttribute("round"));
    const cellRect = cell.getBoundingClientRect();
    const modalWidth = 30;
    const modalHeight = 20;
    const modalLeft = cellRect.left + cellRect.width / 2 - modalWidth / 2;
    const modalTop = cellRect.bottom + 10;

    if (cell.getAttribute("name") === "#round") {
      setCellName("#round");
      const roundData = globalModel.find(
        (data) => data.round === parseInt(cell.textContent, 10)
      );
      console.log("roundData", roundData);
      setRoundDatainGlobalModel(roundData ? roundData : {});
    } else if (cell.getAttribute("name") === "#head") {
      //get data from nodeID_data
      setCellName("#head");
      const node = nodeLists.find(
        (node) => node.node_id === parseInt(cell.getAttribute("id"), 10)
      );
      console.log("nodeIP", node.node_info.ip);
      const nodeIP = node.node_info.ip ? node.node_info.ip : "";
      setNodeIP(nodeIP);
    } else if (cell.getAttribute("name") === "#node/round") {
      const node = nodeLists.find(
        (node) => node.node_id === parseInt(cell.getAttribute("id"), 10)
      );
      console.log("nodeIP", node.node_info.ip);
      const nodeIP = node.node_info.ip ? node.node_info.ip : "";
      setNodeIP(nodeIP);
      setCellName("#node/round");
      setCellRound(cell.getAttribute("round"));
    }
    setModalStyle({ position: "absolute", top: modalTop, left: modalLeft });
    setShowModal(true);
  };

  // const roundData = globalModel.find((data) => data.round === rounds.round);

  return (
    <div>
      <TableDataComponent
        rounds={rounds}
        nodeLists={nodeLists}
        handleCellHover={handleCellHover}
      />
      <ModalComponent
        cellName={cellName}
        showModal={showModal}
        setShowModal={setShowModal}
        modalStyle={modalStyle}
        roundDatainGlobalModel={roundDatainGlobalModel}
        nodeIP={nodeIP}
        cellRound={cellRound}
      />
    </div>
  );
};

export default PlotComponent;
