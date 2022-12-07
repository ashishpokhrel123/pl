import React from "react";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../feature/modalSlice";

function Modal({ setIsOpen }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.darkBG} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Fc Madrid</h5>
            <hr></hr>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(closeModal())}
          >
            close
          </button>
          <div className={styles.modalContent}>
            Position:<span>{1}</span>
            <br></br>
            Win:<span>{1}</span>
            <br></br>
            Draw:<span>{1}</span>
            <br></br>
            Loss:<span>{1}</span>
            <br></br>
            Goal Score:<span>{1}</span>
            <br></br>
            Goal Conclade:<span>{1}</span>
            <br></br>
            Goal Difference:<span>{1}</span>
            <br></br>
            <span></span>
            Points:<span>{1}</span>
            <br></br>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
