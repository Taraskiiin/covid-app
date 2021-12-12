import React, { useRef, useState } from "react";
import Header from "./components/Header/Header";
import StatisticTable from "./components/StatisticTable/StatisticTable";

const App = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className={`wrapper ${isOpen ? "active" : ""}`}>
      <Header />
      <StatisticTable setOpen={(value: boolean) => setOpen(value)} />
    </div>
  );
};

export default App;
