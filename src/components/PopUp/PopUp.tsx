import React, { RefObject, useRef } from "react";
import { HeartIcon, SkullIcon, PagePlusIcon } from "../../assets/icons";
import { ISummaryObject } from "../../interface";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./popUp.scss";

interface IPopUpProps {
  data: ISummaryObject;
}

const PopUp: React.FC<IPopUpProps> = ({ data }) => {
  const active = useSelector(
    (activeId: { active: { activeId: string | null } }) =>
      activeId.active.activeId
  );
  let visible = false;
  if (active === data.ID) {
    visible = true;
  }
  const dispatch = useDispatch();

  const removeActive = () => {
    dispatch({
      type: "REMOVE_ACTIVE",
      payload: null,
    });
  };

  return (
    <>
      {visible ? (
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
          <button className="btn-ok" onClick={removeActive}>
            Ok
          </button>
        </article>
      ) : null}
    </>
  );
};

export default PopUp;
