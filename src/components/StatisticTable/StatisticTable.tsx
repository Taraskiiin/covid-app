import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";

import ScaleLoader from "react-spinners/ScaleLoader";
import { ISummaryObject } from "../../interface";

import TableRow from "../TableRow/TableRow";

import "./statisticTable.scss";

const StatisticTable: React.FC = () => {
  const [data, setData] = useState<ISummaryObject[]>([]);

  const search = useSelector(
    (store: { search: { search: string } }) => store.search.search
  );
  useEffect(() => {
    async function loadData() {
      const response = await axios.get("https://api.covid19api.com/summary");
      setData(response.data.Countries);
    }
    loadData();
  }, []);

  const filterBySearch = data.filter((el) =>
    el.Country.toLowerCase().includes(search.toLowerCase())
  );

  const sortByTotalConfirmed = () =>
    !search
      ? setData(
          filterBySearch.sort(
            (a: ISummaryObject, b: ISummaryObject) =>
              b.TotalConfirmed - a.TotalConfirmed
          )
        )
      : data;

  const sortByCountry = () =>
    !search
      ? setData(
          filterBySearch.sort((a: ISummaryObject, b: ISummaryObject) =>
            a.Country.localeCompare(b.Country)
          )
        )
      : data;

  return (
    <>
      <div className="table-header table-row">
        <p>№</p>
        <p onClick={sortByCountry}>Country</p>
        <p onClick={sortByTotalConfirmed}>Total Confirmed</p>
      </div>
      {filterBySearch.length ? (
        filterBySearch.map((el, index) => (
          <TableRow key={el.ID} number={index + 1} data={el} />
        ))
      ) : (
        <ScaleLoader color={"#2196F3"} />
      )}
    </>
  );
};

export default StatisticTable;
