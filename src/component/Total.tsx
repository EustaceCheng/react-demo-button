import { useContext } from "react";
import { Typography } from "antd";
import { SumContext } from "../store";

const Total = () => {
  const { selected } = useContext(SumContext) || {};
  if (!selected) return null;
  const sum = selected.reduce((acc, cur) => acc + cur, 0);
  return <Typography.Title>Total Count: {sum}</Typography.Title>;
};

export default Total;
