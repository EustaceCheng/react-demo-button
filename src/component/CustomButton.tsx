import { Button } from "antd";
import { useContext, useState } from "react";
import { SumContext } from "../store";

const CustomButton = ({ name }: { name: number }) => {
  const { setselected } = useContext(SumContext) || {};
  const [toggle, setToggle] = useState(false);

  if (!setselected) return null;
  return (
    <Button
      style={{ width: 60, marginRight: 3 }}
      onClick={() => {
        setToggle((prev) => !prev);

        if (toggle) {
          setselected((prev) => prev.filter((n) => n !== name));
        } else {
          setselected((prev) => [...prev, name]);
        }
      }}
      type={toggle ? "primary" : undefined}
    >
      ({name})
    </Button>
  );
};

export default CustomButton;
