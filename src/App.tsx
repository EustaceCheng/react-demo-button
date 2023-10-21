import "./App.css";
import CustomButton from "./component/CustomButton";
import Total from "./component/Total";
import { SumContext, selectedSet } from "./store";
import CurrentSelected from "./component/CurrentSelected";

const RENDER_BTN_NUMBER = 10;

function App() {
  return (
    <>
      <SumContext.Provider value={selectedSet}>
        <CurrentSelected />
        <Total />

        <div style={{ display: "grid" }}>
          {[...Array(RENDER_BTN_NUMBER)].map((_, index) => (
            <CustomButton key={index} name={index} />
          ))}
        </div>
      </SumContext.Provider>
    </>
  );
}

export default App;
