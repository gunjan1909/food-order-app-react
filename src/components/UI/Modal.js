import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

//backdrop div
const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};

// modal div
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  //the index.html div where modal is added, before the root/ just in body
  const portalDiv = document.getElementById("overlays");

  return (
    <>
      {/* the black backdrop */}
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalDiv)}
      {/* the modal div */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDiv
      )}
    </>
  );
};
export default Modal;
