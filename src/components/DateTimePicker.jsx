import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      todayButton="Select today"
      className="inputData datePickerStyle"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="yyyy/MM/dd"
    />
  );
};

export default DateTimePicker;
