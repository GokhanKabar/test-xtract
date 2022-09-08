import React, { useState } from "react";
import Calendar from "react-calendar";

const DatePicker = ({ handleClose }) => {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  const handleSchedule = () => {
    console.log("schedule =>", value);
  };
  const handleReset = () => {
    setValue(new Date());
    handleClose();
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="datepicker-container">
      <h2>Schedule Response</h2>
      <div className="dateSection">
        <p>Date</p>
        <div>{value.toLocaleDateString()}</div>
      </div>
      <Calendar onChange={onChange} value={value} />

      <div>
        <button onClick={handleSchedule} type="submit">
          Schedule
        </button>
        <button onClick={handleReset} type="reset">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DatePicker;