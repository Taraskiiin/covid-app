import React from "react";
import { HeartIcon, SkullIcon, PagePlusIcon } from "../../assets/icons";

import "./popUp.scss";

const PopUp = () => {
  return (
    <article className="popUp">
      <h2>Country</h2>
      <div className="popUp-row">
        <HeartIcon />
        <p>Total Confirmed</p>
        <p>3</p>
      </div>
      <div className="popUp-row">
        <SkullIcon />
        <p>Total Deaths</p>
        <p>3</p>
      </div>
      <div className="popUp-row">
        <PagePlusIcon />
        <p>Total Recovered</p>
        <p>3</p>
      </div>
      <button className="btn-ok">Ok</button>
    </article>
  );
};

export default PopUp;
