import React, { useState } from "react";
import Modal from "react-modal";



const Test = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalStyle, setModalStyle] = useState({});

  const handleCellHover = (event) => {
    const cell = event.target;
    const cellRect = cell.getBoundingClientRect();
    const modalWidth = 30;
    const modalHeight = 20;
    const modalLeft = cellRect.left + cellRect.width / 2 - modalWidth / 2;
    const modalTop = cellRect.bottom + 10;
    setModalStyle({ position: 'absolute', top: modalTop, left: modalLeft });
    setShowModal(true);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td onMouseEnter={handleCellHover}>Cell 1</td>
            <td>Cell 2</td>
          </tr>
          <tr>
            <td>Cell 3</td>
            <td onMouseEnter={handleCellHover}>Cell 4</td>
          </tr>
        </tbody>
      </table>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
        style={{ overlay: {}, content:  { ...modalStyle, width: '10%', height: '10%' } }}
      >
        <h2>Hello</h2>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>
    </>
  );
};


export default Test;
