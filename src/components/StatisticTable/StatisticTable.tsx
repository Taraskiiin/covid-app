import React, { useEffect, useState } from "react";
import axios from "axios";

import ScaleLoader from "react-spinners/ScaleLoader";
import { ISummaryObject } from "../../interface";

import TableRow from "../TableRow/TableRow";

import "./statisticTable.scss";

interface IStatisticTableProps {
  setOpen: (value: boolean) => void;
}

const StatisticTable: React.FC<IStatisticTableProps> = ({ setOpen }) => {
  const [data, setData] = useState<ISummaryObject[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await axios.get("https://api.covid19api.com/summary");
      setData(response.data.Countries);
    }
    loadData();
  }, []);

  return (
    <>
      <div className="table-header table-row">
        <p>№</p>
        <p>Country</p>
        <p>Total Confirmed</p>
      </div>
      {data ? (
        data.map((el, index) => (
          <TableRow
            key={el.ID}
            number={index + 1}
            data={el}
            setOpen={(value: boolean) => setOpen(value)}
          />
        ))
      ) : (
        <ScaleLoader color={"#2196F3"} />
      )}
    </>
  );
};

export default StatisticTable;
