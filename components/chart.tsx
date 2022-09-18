import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart = ({
  agree,
  disAgree,
  giveUp,
}: {
  agree: number;
  disAgree: number;
  giveUp: number;
}) => {
  const data = [
    { title: "찬성", value: agree, color: "#0044ff" },
    { title: "반대", value: disAgree, color: "#f63e3e" },
    { title: "기권", value: giveUp, color: "black" },
  ];

  return (
    <PieChart
      style={{
        display: "block",
        width: "500px",
        height: "500px",
        margin: "50px auto",
      }}
      data={data}
      label={({ dataEntry }) => dataEntry.value}
      animate
    />
  );
};

export default Chart;
