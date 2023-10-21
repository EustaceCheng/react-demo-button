import { useContext } from "react";
import { Typography } from "antd";
import { SumContext } from "../store";

const Total = () => {
  console.log("Total");
  const context = useContext(SumContext);
  if (!context) return null;
  const selected = Array.from(context.values());
  const sum = selected.reduce((acc, cur) => acc + cur, 0);
  return <Typography.Title>Total Count: {sum}</Typography.Title>;
};

export default Total;
