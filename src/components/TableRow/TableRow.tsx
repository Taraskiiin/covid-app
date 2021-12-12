import React from "react";

import { ISummaryObject } from "../../interface";

import { useDispatch } from "react-redux";

import "../StatisticTable/statisticTable.scss";
import PopUp from "../PopUp/PopUp";

interface IStatisticRow {
  number: number;
  data: ISummaryObject;
}

const TableRow: React.FC<IStatisticRow> = ({ number, data }) => {
  const dispatch = useDispatch();
  const makeActive = () => {
    dispatch({
      type: "MAKE_ACTIVE",
      payload: data.ID,
    });
  };
  return (
    <>
      <div className="table-row" onClick={() => makeActive()}>
        <p>{number}</p>
        <p>{data.Country}</p>
        <p>{data.TotalConfirmed}</p>
      </div>
      <PopUp data={data} />
    </>
  );
};

export default TableRow;
