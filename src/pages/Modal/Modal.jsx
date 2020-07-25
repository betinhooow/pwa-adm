import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Modal from "../../components/Modal";
import { useState } from "react";

const ModalPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header />

      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        onClick={() => setOpen(true)}
      >
        Large Modal
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Modal title">
        <div className="modal-body">
          <p>
            <strong>Lorem Ipsum is simply dummy</strong> text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            <strong>Lorem Ipsum is simply dummy</strong> text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </Modal>
      <Footer />
    </div>
  );
};

export default ModalPage;
