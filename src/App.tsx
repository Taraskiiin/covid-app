import React from "react";
import Header from "./components/Header/Header";
import StatisticTable from "./components/StatisticTable/StatisticTable";

import { useSelector } from "react-redux";

const App = () => {
  const active = useSelector(
    (activeId: { active: { activeId: string | null } }) =>
      activeId.active.activeId
  );
  return (
    <div className={`wrapper ${active ? "active" : ""}`}>
      <Header />
      <StatisticTable />
    </div>
  );
};

export default App;
