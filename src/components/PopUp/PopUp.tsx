import React, { RefObject, useRef } from "react";
import { HeartIcon, SkullIcon, PagePlusIcon } from "../../assets/icons";
import { ISummaryObject } from "../../interface";

import "./popUp.scss";

interface IPopUpProps {
  isOpen: boolean;
  data: ISummaryObject;
  onClick: () => void;
}

const PopUp: React.FC<IPopUpProps> = ({ isOpen, data, onClick }) => {
  return (
    <>
      {isOpen ? (
        <article className="popUp">
          <h2>{data.Country}</h2>
          <div className="popUp-row">
            <HeartIcon />
            <p>Total Confirmed</p>
            <p>{data.TotalConfirmed}</p>
          </div>
          <div className="popUp-row">
            <SkullIcon />
            <p>Total Deaths</p>
            <p>{data.TotalDeaths}</p>
          </div>
          <div className="popUp-row">
            <PagePlusIcon />
            <p>Total Recovered</p>
            <p>{data.TotalRecovered}</p>
          </div>
          <button className="btn-ok" onClick={onClick}>
            Ok
          </button>
        </article>
      ) : null}
    </>
  );
};

export default PopUp;
