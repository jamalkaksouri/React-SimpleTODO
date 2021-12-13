import { useState, useRef, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMenu, AiOutlineTag } from "react-icons/ai";
import DateTimePicker from "./DateTimePicker";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const PriorityOptions = [
  { value: "2", label: "+2" },
  { value: "1", label: "+1" },
  { value: "0", label: "0" },
  { value: "-1", label: "-1" },
];

const TagsOptions = [
  { value: "tag1", label: "tag1" },
  { value: "tag2", label: "tag2" },
  { value: "tag3", label: "tag3" },
];

const animatedComponents = makeAnimated();

const customStyles = {
  control: (base) => ({
    ...base,
    width: 100,
    border: "1px solid #ccc",
    boxShadow: "0 0 0 1px #ccc",
    ":hover": {
      border: "1px solid #009688 !important",
      boxShadow: "0 0 0 1px #009688 !important",
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected && "#009688",
    ":active": {
      backgroundColor: state.isSelected && "#009688",
    },
  }),
  menu: (base) => ({
    ...base,
  }),
  menuList: (base) => ({
    ...base,
  }),
  indicatorSeparator: (base) => ({
    ...base,
    width: 2,
  }),
};
const tagsStyles = {
  control: (base) => ({
    ...base,
    border: "1px solid #ccc",
    boxShadow: "0 0 0 1px #ccc",
    ":hover": {
      border: "1px solid #009688 !important",
      boxShadow: "0 0 0 1px #009688 !important",
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected && "#009688",
    ":active": {
      backgroundColor: state.isSelected && "#009688",
    },
  }),
  menu: (base) => ({
    ...base,
  }),
  menuList: (base) => ({
    ...base,
  }),
  indicatorSeparator: (base) => ({
    ...base,
    width: 2,
  }),
};

const TodoForm = ({ edit, submitTodo, selectedOption }) => {
  const [input, setInput] = useState(edit ? edit.text : "");
  const [prioriry, setPrioriry] = useState({ selectedOption: null });
  const [advancedMenu, setAdvancedMenu] = useState({ isShowMenu: false });
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const advancedHandler = () => {
    setAdvancedMenu({
      isShowMenu: (advancedMenu.isShowMenu = !advancedMenu.isShowMenu),
    });
    inputRef.current.focus();
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("input todo");
      inputRef.current.focus();
      return;
    }
    submitTodo(input);
    setInput("");
    inputRef.current.focus();
  };

  const priorityChange = (selectedOption) => {
    setPrioriry({ selectedOption });
  };

  return (
    <form style={{ width: "100%" }} onSubmit={submitHandler}>
      <div className="formControl">
        <div className="inputBtn">
          <input
            className="inputData"
            type="text"
            value={input}
            onChange={changeHandler}
            placeholder="New task"
            ref={inputRef}
            // maxLength="100"
          />
          <button title="Add" className="btn addTodo" type="submit">
            <AiOutlinePlus fontSize="18px" />
          </button>
          <button
            title="Advanced"
            type="button"
            onClick={advancedHandler}
            className="btn addTodo"
          >
            <AiOutlineMenu fontSize="18px" />
          </button>
        </div>
        <div className="searchBar">
          <input
            className="inputData searchInput"
            type="text"
            value={input}
            onChange={changeHandler}
            placeholder="Search..."
          />
        </div>
      </div>
      <div
        className="advStyle"
        {...(advancedMenu.isShowMenu
          ? {
              style: {
                display: "flex",
              },
            }
          : {
              style: {
                display: "none",
              },
            })}
      >
        <div className="datePriority">
          <span style={{ marginRight: "10px" }}>
            <div className="prioritySelect">
              Priority
              <Select
                defaultValue={PriorityOptions[2]}
                value={PriorityOptions[prioriry.selectedOption]}
                onChange={priorityChange}
                options={PriorityOptions}
                styles={customStyles}
              />
            </div>
          </span>
          <span style={{ marginLeft: "10px" }}>
            Due
            <DateTimePicker />
          </span>
        </div>
        <label htmlFor="">Note</label>
        <textarea
          className="noteMessage"
          placeholder="Note..."
          cols="30"
          rows="8"
        />
        <div className="tagsWrapper">
          <label htmlFor="">Tags</label>
          <div className="tagsBtnWrapper">
            <div className="btnAddTags">
              <Select
                className="tagsInput"
                closeMenuOnSelect={false}
                components={animatedComponents}
                placeholder="select tags"
                isMulti
                options={TagsOptions}
                styles={tagsStyles}
              />
            </div>
            <button title="Add Tag" className="btn btnAddTag" type="submit">
              <AiOutlineTag fontSize="18px" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
