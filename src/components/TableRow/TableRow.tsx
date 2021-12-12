import React, { useEffect, useState } from "react";

import { ISummaryObject } from "../../interface";

import "../StatisticTable/statisticTable.scss";
import PopUp from "../PopUp/PopUp";

interface IStatisticRow {
  setOpen: (value: boolean) => void;
  number: number;
  data: ISummaryObject;
}

const TableRow: React.FC<IStatisticRow> = ({ number, data, setOpen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  return (
    <>
      <div className="table-row" onClick={() => setIsOpen(true)}>
        <p>{number}</p>
        <p>{data.Country}</p>
        <p>{data.TotalConfirmed}</p>
      </div>
      <PopUp data={data} isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default TableRow;
