import React from "react";
import { personalInfo } from "../constant/data";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, idx) => {
        return (
          <li className="info__item" key={idx}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
