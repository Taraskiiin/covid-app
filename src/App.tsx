import React from "react";
import Header from "./components/Header/Header";
import StatisticTable from "./components/StatisticTable/StatisticTable";
import PopUp from "./components/PopUp/PopUp";

const App = () => {
  return (
    <div className="wrapper">
      {/* <Header />
      <StatisticTable /> */}
      <PopUp />
    </div>
  );
};

export default App;
