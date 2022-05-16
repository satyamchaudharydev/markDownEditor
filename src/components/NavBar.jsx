import { React, useState, useRef } from "react";
import { ReactComponent as Menu } from "../assets/icon-menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Doc } from "../assets/icon-doc.svg";
import { ReactComponent as Delete } from "../assets/icon-delete.svg";
import { ReactComponent as Save } from "../assets/icon-save.svg";
import { useEditor } from "../context/Editor";
import { motion } from "framer-motion";
export default function NavBar() {
  const { open, setOpen } = useEditor();
  const modalRef = useRef(null);

  const showingModal = () => {
    modalRef.current.showModal();
  };
  const removingModal = () => {
    modalRef.current.close();
  };
  return (
    <>
      <motion.dialog ref={modalRef} id="modal">
        <h3 className="dialog__title">Delete the Document</h3>
        <p className="dialog__content">
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents? This action cannot be reversed.
        </p>
        <button type="submit" onClick={() => removingModal()}>
          Confirm & Delete
        </button>
      </motion.dialog>
      <nav className="flex row">
        <div className="menu flex" onClick={() => setOpen(!open)}>
          <Menu></Menu>
        </div>
        <div className="logo">
          <Logo></Logo>
        </div>
        <div className="doc-info flex">
          <Doc></Doc>
          <div className="doc-name">
            <p className="doc-name__label">Document Name</p>
            <p className="doc-name__text">welcome.md</p>
          </div>
        </div>
        <div className="nav-action-btns flex">
          <button className="dlt-btn" onClick={() => showingModal()}>
            <Delete></Delete>
          </button>
          <div className="save-btn flex">
            <Save></Save>
            <p>Save Changes</p>
          </div>
        </div>
      </nav>
    </>
  );
}
