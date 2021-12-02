import { useState, useRef, useEffect } from "react";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";

const TodoForm = ({ edit, submitTodo }) => {
  const [input, setInput] = useState(edit ? edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

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
      <div className="formControl">
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={edit ? "update todo" : "New task"}
          ref={inputRef}
          // maxLength="100"
        />
        <button className={`btn ${!edit && "addTodo"}`} type="submit">
          {edit ? (
            <AiOutlineEdit fontSize="18px" />
          ) : (
            <AiOutlinePlus fontSize="18px" />
          )}
        </button>
      </div>
      <p className="advancedBtn">advanced</p>
    </form>
  );
};

export default TodoForm;
