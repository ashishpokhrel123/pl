import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <div className="App">
      <Table />
      {isOpen && <Modal />}
    </div>
  );
}

export default App;
