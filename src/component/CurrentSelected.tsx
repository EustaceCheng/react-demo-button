import { Typography } from "antd";
import { useContext } from "react";
import { SumContext } from "../store";

const CurrentSelected = () => {
  console.log("CurrentSelected");
  const context = useContext(SumContext);
  if (!context) return null;
  const set = context.values();
  console.log(set);
  const selected = Array.from(set);
  console.log(selected);
  return (
    <Typography.Title>Current Selected: {selected.join(",")}</Typography.Title>
  );
};

export default CurrentSelected;
