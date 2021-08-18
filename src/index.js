import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";
import './card.css';
const sData = (val) => {
  return <Card key={val.key} imgSrc={val.imgSrc} sDesc={val.sDesc} sName={val.sName} link={val.link}/>;
};
ReactDOM.render(
  <>
    <h1 className="top5">Top 5 Netflix series 2021</h1>
    <div className="cardBody">{Sdata.map(sData)}</div>
  </>,
  document.getElementById("root")
);
