import { Button } from "antd";
import { useContext, useState } from "react";
import { SumContext } from "../store";

const CustomButton = ({ name }: { name: number }) => {
  const context = useContext(SumContext);
  const [toggle, setToggle] = useState(false);
  if (!context) return null;

  return (
    <Button
      onClick={() => {
        console.log(context.values());
        setToggle((prev) => !prev);

        if (toggle) {
          context.delete(name);
        } else {
          context.add(name);
        }
      }}
      type={toggle ? "primary" : undefined}
    >
      Button ({name}) {toggle ? "(Clicked)" : ""}
    </Button>
  );
};

export default CustomButton;
