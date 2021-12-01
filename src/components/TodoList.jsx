import Todo from "./Todo";
import { useState } from "react";
import TodoForm from "./TodoForm";
import getCurrentDateTime from "../common/dateTimeFunc";
import _ from "lodash";

const TodoList = ({
  todos,
  onComplete,
  onDelete,
  onEdit,
  changeTodo,
  noteShowHide,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    date: getCurrentDateTime(),
    isCompleted: false,
    content: "",
  });

  const editTodo = (newValue) => {
    onEdit(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };

  const renderTodos = () => {
    if (todos.length === 0)
      return <p className="copyRight">design by jamal kaksouri</p>;

    return _.map(_.orderBy(todos, ["date"], ["desc"]), (todo) => {
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
    });
  };
  return (
    <div
      className={todos.length === 0 ? "taskListBeforTodo" : "taskList"}
      {...(todos.length > 0 && { style: { borderTop: "1px solid #ccc" } })}
      {...(edit.id ? { style: { paddingRight: 0 } } : "")}
    >
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
};

export default TodoList;
