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

  return (
    <div className="container">
      <Navbar
        unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length}
      />
      <TodoForm submitTodo={addTodo} />
      {/* <TodoForm submitTodo={addTodo} /> */}
      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onDelete={deleteHandler}
        onEdit={editHandler}
      />
    </div>
  );
};

export default TodoApp;
