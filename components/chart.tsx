import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart = ({
  agree,
  disAgree,
}: {
  agree: number;
  disAgree: number;
}) => {
  const data = [
    { title: "찬성", value: agree, color: "#f63e3e" },
    { title: "반대", value: disAgree, color: "#0044ff" },
  ];

  return (
    <PieChart
      style={{
        display: "block",
        width: "500px",
        height: "500px",
        margin: "0 auto",
      }}
      data={data}
      label={({ dataEntry }) => dataEntry.value}
      animate
    />
  );
};

export default Chart;
