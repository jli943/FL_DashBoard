import React from "react";
import Modal from "react-modal";
import NodeID_data from "../nodeID_data/nodeID_data";
import GlobalModelTable from "../globalModel/table";
import NodeID_localmodel from "../nodeID_localmodel/nodeID_localmodel";

const ModalComponent = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.showModal}
        onRequestClose={() => props.setShowModal(false)}
        contentLabel="Example Modal"
        style={{
          overlay: {},
          content: { ...props.modalStyle, width: "30%", height: "30%" },
        }}
      >
        {props.cellName === "#round" ? (
          <GlobalModelTable
            roundDatainGlobalModel={props.roundDatainGlobalModel}
          />
        ) : props.cellName === "#head" ? (
          <NodeID_data ip={props.nodeIP} />
        ) : (
          <NodeID_localmodel ip={props.nodeIP} round={props.cellRound} />
        )}
        <button onClick={() => props.setShowModal(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default ModalComponent;
