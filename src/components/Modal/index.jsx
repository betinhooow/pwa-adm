import React from "react";
import { Content } from "./styles";

const Modal = ({ open, onClose, children, title }) => {
  return (
    open && (
      <div
        className="modal inmodal fade in"
        role="dialog"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-lg">
          <Content>
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  onClick={onClose}
                  className="close"
                  data-dismiss="modal"
                >
                  <span aria-hidden="true">&times;</span>
                  <span className="sr-only">Close</span>
                </button>
                <h4 className="modal-title">{title}</h4>
              </div>

              {children}
            </div>
          </Content>
        </div>
        <div className="modal-backdrop fade in"></div>
      </div>
    )
  );
};

export default Modal;
