import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="inputData datePickerStyle"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeInputLabel="Time:"
      dateFormat="yyyy/MM/dd hh:mm aa"
      showTimeInput
    />
  );
};

export default DateTimePicker;
