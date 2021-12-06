import { useState } from "react";
import DateTimePicker from "./DateTimePicker";

const TodoAdvanced = ({ edit, submitTodo }) => {
  const [input, setInput] = useState(edit ? edit.text : "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("input todo");
      return;
    }
    submitTodo(input);
    setInput("");
  };

  return (
    <form style={{ width: "100%" }} onSubmit={submitHandler}>
      <div className="">
        <div>
          <DateTimePicker />
          <DateTimePicker />
        </div>
        <textarea placeholder="Note..." name="" id="" cols="30" rows="10" />
        <input type="text" name="tags" id="" />
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </form>
  );
};

export default TodoAdvanced;
