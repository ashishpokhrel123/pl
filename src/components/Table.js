import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../feature/modalSlice";
import { fetchScore } from "../feature/scoreSlice";
import "./table.css";

function Table() {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.score);
  console.log(score, "score");

  useEffect(() => {
    dispatch(fetchScore());
  }, []);

  return (
    <div>
      <table className="table">
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader">Position</th>
            <th className="tableHeader">Club Name</th>
            <th className="tableHeader">Played</th>
            <th className="tableHeader">Win</th>
            <th className="tableHeader">Draw</th>
            <th className="tableHeader">Loss</th>
            <th className="tableHeader">GF</th>
            <th className="tableHeader">GA</th>
            <th className="tableHeader">GD</th>
            <th className="tableHeader">Points</th>
            <th className="tableHeader">Forms</th>
          </tr>
        </thead>
        <tbody>
          {score.map((data, index) => (
            <tr
              key={index}
              className="tableRowIems"
              onClick={() => dispatch(openModal())}
            >
              <td className="tableCell">{data.position}</td>
              <td className="tableCell">{data.name}</td>
              <td className="tableCell">{data.played}</td>
              <td className="tableCell">{data.win}</td>
              <td className="tableCell">{data.draw}</td>
              <td className="tableCell">{data.loss}</td>
              <td className="tableCell">{data.gf}</td>
              <td className="tableCell">{data.ga}</td>
              <td className="tableCell">{data.gd}</td>
              <td className="tableCell">1{data.points}</td>
              <td className="tableCell">
                <div style={{ display: "flex", padding: "5px" }}>
                  {" "}
                  <div className="winButton"> w</div>
                  <div className="lossButton"> L</div>
                  <div className="winButton"> w</div>
                  <div className="winButton"> w</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
