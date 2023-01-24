import styles from "./Modal.module.sass";
import { Fragment } from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";

function Backdrop(props) {
  return <div className={styles.modal__backdrop} onClick={props.onClose}></div>;
}

function ModalBody(props) {
  return (
    <div className={styles.modal}>
      <header>
        <h1 className="title">{props.title}</h1>
      </header>
      <main>
        <p className="text">{props.text}</p>
      </main>
      <footer className="actions">
        <Button className={styles.button} onClick={props.onClose}>
          Close
        </Button>
      </footer>
    </div>
  );
}

export default function Modal(props) {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        document.querySelector(".modal__backdrop")
      )}
      {createPortal(
        <ModalBody
          title={props.title}
          text={props.text}
          onClose={props.onClose}
        />,
        document.querySelector(".modal")
      )}
    </Fragment>
  );
}
