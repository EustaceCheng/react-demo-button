import { Typography } from "antd";
import { useContext } from "react";
import { SumContext } from "../store";

const CurrentSelected = () => {
  const { selected } = useContext(SumContext) || {};
  if (!selected) return null;

  return (
    <>
      <Typography.Title>Current Selected: </Typography.Title>
      <Typography.Paragraph style={{ fontSize: 24 }}>
        {selected.join(",")}
      </Typography.Paragraph>
    </>
  );
};

export default CurrentSelected;
