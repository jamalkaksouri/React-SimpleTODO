import { useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import getCurrentDateTime from "../common/dateTimeFunc";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    const newTodo = {
      id: uuidv4(),
      text: input,
      date: getCurrentDateTime(),
      isCompleted: false,
      content: input,
      color: "#fff",
      contentColor: "#fff",
      counter: 0,
      noteIsShow: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteHandler = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };

  const editHandler = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const changeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);

    switch (todos[index].counter) {
      case -1:
        const selectedTodo = { ...todos[index] };

        selectedTodo.color = "#fff";
        selectedTodo.contentColor = "#fff";
        selectedTodo.counter = todos[index].counter + 1;

        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);
        break;
      case 0:
        {
          const selectedTodo = { ...todos[index] };

          selectedTodo.color = "#ff7700";
          selectedTodo.contentColor = "#FFF2E6";
          selectedTodo.counter = todos[index].counter + 1;

          const updatedTodos = [...todos];
          updatedTodos[index] = selectedTodo;
          setTodos(updatedTodos);
        }
        break;
      case 1:
        {
          const selectedTodo = { ...todos[index] };

          selectedTodo.color = "#ff3333";
          selectedTodo.contentColor = "#FFEEEE";
          selectedTodo.counter = todos[index].counter + 1;

          const updatedTodos = [...todos];
          updatedTodos[index] = selectedTodo;
          setTodos(updatedTodos);
        }
        break;
      case 2:
        {
          const selectedTodo = { ...todos[index] };

          selectedTodo.color = "#3377ff";
          selectedTodo.contentColor = "#EBF1FF";
          selectedTodo.counter = -1;

          const updatedTodos = [...todos];
          updatedTodos[index] = selectedTodo;
          setTodos(updatedTodos);
        }
        break;
      default:
        setTodos({ ...todos, counter: 0 });
        break;
    }
  };

  const noteShowHide = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.noteIsShow = !todos[index].noteIsShow;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <Navbar
        unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length}
        completedTodos={todos.filter((todo) => todo.isCompleted).length}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onDelete={deleteHandler}
        onEdit={editHandler}
        changeTodo={changeTodo}
        noteShowHide={noteShowHide}
      />
    </div>
  );
};

export default TodoApp;
