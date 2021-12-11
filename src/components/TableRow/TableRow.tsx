import React from "react";

import { IStatisticRow } from "../../interface";

import "../StatisticTable/statisticTable.scss";

const TableRow: React.FC<IStatisticRow> = ({ number, data }) => {
  return (
    <div className="table-row">
      <p>{number}</p>
      <p>{data.Country}</p>
      <p>{data.TotalConfirmed}</p>
    </div>
  );
};

export default TableRow;
