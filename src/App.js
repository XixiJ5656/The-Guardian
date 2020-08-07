import React from "react";
import Headlines from "./components/Headlines";
import Sportlight from "./components/Sportlight";
import Opinion from "./components/Opinion";
import Sports from "./components/Sports";
import TodayInfocus from "./components/TodayInFocus";
import Culture from "./components/Culture";
import AccrossCountry from "./components/AccrossCountry";
import AroundWorld from "./components/AroundWorld";
import MostViewed from "./components/MostViewed";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Headlines />
      <Sportlight />
      <Opinion />
      <Sports />
      <TodayInfocus />
      <Culture />
      <AccrossCountry />
      <AroundWorld />
      <MostViewed />
    </div>
  );
}

export default App;
