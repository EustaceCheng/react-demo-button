import "./App.css";
import CustomButton from "./component/CustomButton";
import Total from "./component/Total";
import { SumContext } from "./store";
import CurrentSelected from "./component/CurrentSelected";
import { useState } from "react";
import { generateUniqueNumbers } from "./utils";

const RENDER_BTN_NUMBER = 10;
const MAX = 100;
const ARRAY = generateUniqueNumbers(MAX, RENDER_BTN_NUMBER);

function App() {
  const [selected, setselected] = useState<number[]>([]);
  return (
    <>
      <SumContext.Provider value={{ selected, setselected }}>
        <CurrentSelected />
        <Total />

        <div>
          {ARRAY.map((v) => (
            <CustomButton key={v} name={v} />
          ))}
        </div>
      </SumContext.Provider>
    </>
  );
}

export default App;
