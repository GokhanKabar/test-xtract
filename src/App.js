import "./App.css";
import DatePicker from "./components/DatePicker";
import Backdrop from "./components/Backdrop";
import useDatepicker from "./hooks/useDatepicker";

function App() {
  const {datepickerIsOpen, close, open} = useDatepicker()

  return (
    <div className="App">
      {datepickerIsOpen && (
        <>
          <Backdrop handleClose={close}>
            <DatePicker handleClose={close} />
          </Backdrop>
        </>
      )}
      <button className="btn" type="button" onClick={open}>
        Select date
      </button>
    </div>
  );
}

export default App;