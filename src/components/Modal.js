import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faX } from "@fortawesome/free-solid-svg-icons";

function Modal({ state }) {
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="top-container">
          <FontAwesomeIcon className="icon-check" icon={faCircleCheck} />
          <FontAwesomeIcon
            className="close-X"
            icon={faX}
            onClick={() => {
              state(false);
            }}
          />

          <h1>Completed</h1>
          <p>You have sucessfully downloaded all the source code files.</p>
        </div>
        <div className="btn-container">
          <button
            onClick={() => {
              state(false);
            }}
          >
            Ok, Close
          </button>
          <button>Open File</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
