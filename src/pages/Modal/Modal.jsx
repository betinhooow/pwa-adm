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
      
      <Modal open={open} onClose={() => setOpen(false)} />
      <Footer />
    </div>
  );
};

export default ModalPage;
