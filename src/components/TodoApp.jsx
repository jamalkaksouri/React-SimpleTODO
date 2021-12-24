import { useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import getCurrentDateTime from "../common/dateTimeFunc";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputData, priorityValue, dueDateData, notesMessageData) => {
    const newTodo = {
      id: uuidv4(),
      text: inputData,
      dueDate: dueDateData,
      date: getCurrentDateTime(),
      content: notesMessageData,
      isCompleted: false,
      color: selectedPriorityColor(priorityValue.selectedOption.value)[0].color,
      contentColor: selectedPriorityColor(priorityValue.selectedOption.value)[0]
        .contentColor,
      counter: priorityValue,
      noteIsShow: false,
    };
    setTodos([...todos, newTodo]);
  };

  const selectedPriorityColor = (pValue) => {
    let colors = [{ color: "#fff", contentColor: "#fff" }];
    switch (pValue) {
      case "0":
        colors = [{ color: "#fff", contentColor: "#fff" }];
        break;
      case "1":
        colors = [{ color: "#ff7700", contentColor: "#FFF2E6" }];
        break;
      case "2":
        colors = [{ color: "#ff3333", contentColor: "#FFEEEE" }];
        break;
      case "-1":
        colors = [{ color: "#3377ff", contentColor: "#EBF1FF" }];
        break;
      default:
        colors = [{ color: "#fff", contentColor: "#fff" }];
        break;
    }
    return colors;
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
        All={todos.length}
        Active={todos.filter((todo) => !todo.isCompleted).length}
        completed={todos.filter((todo) => todo.isCompleted).length}
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
