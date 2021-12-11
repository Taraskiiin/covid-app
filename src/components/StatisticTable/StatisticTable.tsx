import React, { useEffect, useState } from "react";
import axios from "axios";

import ScaleLoader from "react-spinners/ScaleLoader";
import { ISummaryObject } from "../../interface";

import TableRow from "../TableRow/TableRow";

const StatisticTable: React.FC = () => {
  const [data, setData] = useState<ISummaryObject[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await axios.get("https://api.covid19api.com/summary");
      console.log(response.data.Countries);
      setData(response.data.Countries);
    }
    loadData();
  }, []);

  return (
    <main className="wrapper">
      <div className="table-header table-row">
        <p>№</p>
        <p>Country</p>
        <p>Total</p>
        {data ? (
          data.map((el, index) => (
            <TableRow key={el.ID} number={index} data={el} />
          ))
        ) : (
          <ScaleLoader color={"#2196F3"} />
        )}
      </div>
    </main>
  );
};

export default StatisticTable;
