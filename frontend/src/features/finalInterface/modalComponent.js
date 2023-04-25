// import React from "react";
// import Modal from "react-modal";
// import NodeID_data from "../nodeID_data/nodeID_data";
// import GlobalModelTable from "../globalModel/table";
// import NodeID_localmodel from "../nodeID_localmodel/nodeID_localmodel";

// const ModalComponent = (props) => {
//   return (
//     <div>
//       <Modal
//         isOpen={props.showModal}
//         onRequestClose={() => props.setShowModal(false)}
//         contentLabel="Example Modal"
//         style={{
//           overlay: {},
//           content: { ...props.modalStyle, width: "30%", height: "30%" },
//         }}
//       >
//         {props.cellName === "#round" ? (
//           <GlobalModelTable
//             roundDatainGlobalModel={props.roundDatainGlobalModel}
//           />
//         ) : props.cellName === "#head" ? (
//           <NodeID_data ip={props.nodeIP} />
//         ) : (
//           <NodeID_localmodel ip={props.nodeIP} round={props.cellRound} />
//         )}
//         {/* <button onClick={() => props.setShowModal(false)}>Close</button> */}
//       </Modal>
//     </div>
//   );
// };

// export default ModalComponent;

import React from "react";
import Modal from "react-modal";
import NodeID_data from "../nodeID_data/nodeID_data";
import GlobalModelTable from "../globalModel/table";
import NodeID_localmodel from "../nodeID_localmodel/nodeID_localmodel";

const ModalComponent = (props) => {
  return (
    <Modal
      isOpen={props.showModal}
      onRequestClose={() => props.setShowModal(false)}
      contentLabel="Example Modal"
      className="w-2/5 mx-auto mt-10 rounded-md shadow-lg bg-white outline-none"
      overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75 z-50"
      ariaHideApp={false}
    >
      <div className="px-6 py-4">
        {props.cellName === "#round" ? (
          <GlobalModelTable
            roundDatainGlobalModel={props.roundDatainGlobalModel}
          />
        ) : props.cellName === "#head" ? (
          <NodeID_data ip={props.nodeIP} port={props.nodePort} />
        ) : (
          <NodeID_localmodel
            ip={props.nodeIP}
            port={props.nodePort}
            round={props.cellRound}
          />
        )}
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          onClick={() => props.setShowModal(false)}
        >
          Close
        </button> */}
      </div>
    </Modal>
  );
};

export default ModalComponent;
