import Todo from "./Todo";
import { useState } from "react";
import TodoForm from "./TodoForm";
import getCurrentDateTime from "../common/dateTimeFunc";
import _ from "lodash";
import Select from "react-select";

const TodoList = ({
  todos,
  onComplete,
  onDelete,
  onEdit,
  changeTodo,
  noteShowHide,
  priorityChange,
  selectedOption,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    date: getCurrentDateTime(),
    isCompleted: false,
    content: "",
  });

  const [sticky, setSticky] = useState(false);

  const editTodo = (newValue) => {
    onEdit(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const SortOptions = [
    { value: "byPriority", label: "sort by priority" },
    { value: "byDueDate", label: "sort by due date" },
    { value: "byDateCreated", label: "sort by date created" },
  ];

  const customStylesSort = {
    control: (base) => ({
      ...base,
      width: 200,
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
    singleValue: (base) => ({
      ...base,
      color: "#009688",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      width: 2,
    }),
  };

  const showStickySortHandler = () => {
    const getScrollTopValue = document.querySelector("#todoDataList").scrollTop;
    if (getScrollTopValue > 3) {
      setSticky(true);
    } else if (getScrollTopValue <= 0) {
      setSticky(false);
    }
  };

  const renderTodos = () => {
    return (
      <>
        {todos.length > 1 && (
          <div
            className={sticky ? "sortWrapper sortWrapperSticky" : "sortWrapper"}
          >
            <span>
              Notes: <span className="showNote">Show</span>
              <span>/</span>
              <span className="showNote">Hide</span>
            </span>
            <span>
              <Select
                defaultValue={SortOptions[0]}
                value={SortOptions[selectedOption]}
                onChange={priorityChange}
                options={SortOptions}
                styles={customStylesSort}
              />
            </span>
          </div>
        )}

        {_.map(_.orderBy(todos, ["date"], ["desc"]), (todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={() => onComplete(todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
              changeTodo={() => changeTodo(todo.id)}
              noteShowHide={() => noteShowHide(todo.id)}
            />
          );
        })}
      </>
    );
  };
  return (
    <div
      id="todoDataList"
      onScroll={showStickySortHandler}
      className={todos.length === 0 ? "" : "taskList"}
      {...(todos.length > 0 && { style: { borderTop: "1px solid #ccc" } })}
      {...(edit.id ? { style: { paddingRight: 0 } } : "")}
    >
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
};

export default TodoList;
