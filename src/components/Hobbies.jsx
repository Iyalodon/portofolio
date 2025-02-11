import React from "react";
import { hobbies } from "../constant/data";

const Hobbies = () => {
  return (
    <>
      {hobbies.map(({ desc }, idx) => {
        return (
          <li key={idx}>
            <span>{desc}</span>
          </li>
        );
      })}
    </>
  );
};

export default Hobbies;
