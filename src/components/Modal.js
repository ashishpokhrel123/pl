import React from "react";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../feature/modalSlice";

function Modal({ setIsOpen }) {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.score.team);
  const loading = useSelector((state) => state.score.loading);

  return (
    <>
      <div className={styles.darkBG} />
      <div className={styles.centered}>
        {loading === false ? (
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>{team[0].name}</h5>
              <hr></hr>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => dispatch(closeModal())}
            >
              close
            </button>

            <div className={styles.modalContent}>
              Position:<span>{team[0].position}</span>
              <br></br>
              Win:<span>{team[0].win}</span>
              <br></br>
              Draw:<span>{team[0].draw}</span>
              <br></br>
              Loss:<span>{team[0].loss}</span>
              <br></br>
              Goal Score:<span>{team[0].gs}</span>
              <br></br>
              Goal Conclade:<span>{team[0].ga}</span>
              <br></br>
              Goal Difference:<span>{team[0].gd}</span>
              <br></br>
              <span></span>
              Points:<span>{1}</span>
              <br></br>
            </div>
          </div>
        ) : (
          <div>Please wait</div>
        )}
      </div>
    </>
  );
}

export default Modal;
