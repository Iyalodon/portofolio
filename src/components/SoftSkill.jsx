import React from "react";
import { softSkill } from "../constant/data";

const SoftSkill = () => {
  return (
    <>
      {softSkill.map(({ desc }, idx) => {
        return (
          <li key={idx}>
            <span>{desc}</span>
          </li>
        );
      })}
    </>
  );
};

export default SoftSkill;
