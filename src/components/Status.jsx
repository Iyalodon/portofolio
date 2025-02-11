import React from "react";
import { stats } from "../constant/data";
import parse from "html-react-parser";

const Status = () => {
  return (
    <>
      {stats.map(({ no, title }, idx) => {
        return (
          <div className="stats__box" key={idx}>
            <h3 className="stats__no">{no}</h3>
            <p className="stats__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Status;
