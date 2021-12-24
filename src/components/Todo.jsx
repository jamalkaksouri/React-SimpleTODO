import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheckSquare,
  AiOutlineBorder,
  AiOutlineCaretRight,
  AiOutlineCaretDown,
  AiOutlineBars,
} from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import checkNull from "../common/checkNullValue";

const Todo = ({
  todo,
  onComplete,
  onDelete,
  onEdit,
  changeTodo,
  noteShowHide,
}) => {
  return (
    <div
      className={!todo.isCompleted ? "todo" : "todoIsCompleted"}
      style={{
        borderLeft: `${
          todo.isCompleted
            ? "1px solid rgb(225, 225, 225)"
            : todo.counter.selectedOption.value === "0"
            ? "1px solid #e1e1e1"
            : `3px solid ${todo.color}`
        }`,
      }}
      {...(todo.noteIsShow && {
        style: {
          paddingTop: "19px",
          borderLeft: `${
            todo.isCompleted
              ? "1px solid rgb(225, 225, 225)"
              : todo.counter.selectedOption.value === "0"
              ? "1px solid #e1e1e1"
              : `3px solid ${todo.color}`
          }`,
        },
      })}
    >
      {todo.counter.selectedOption.value !== "0" && (
        <span
          className="periorityTodo"
          {...(todo.noteIsShow
            ? {
                style: {
                  display: `${todo.isCompleted ? "none" : "block"}`,
                  backgroundColor: `${todo.isCompleted ? "none" : todo.color}`,
                  marginLeft: `${
                    todo.counter.selectedOption.value < 0 && "-20px"
                  }`,
                  padding: `${
                    todo.counter.selectedOption.value < 0 && "3px 3px 3px 7px"
                  }`,
                },
              }
            : {
                style: {
                  display: `${todo.isCompleted ? "none" : "block"}`,
                  backgroundColor: `${todo.isCompleted ? "none" : todo.color}`,
                  marginLeft: `${
                    todo.counter.selectedOption.value < 0 && "-20px"
                  }`,
                  padding: `${
                    todo.counter.selectedOption.value < 0 && "3px 3px 3px 7px"
                  }`,
                },
              })}
        >
          {todo.counter.selectedOption.value < 0
            ? todo.counter.selectedOption.value
            : "+" + todo.counter.selectedOption.value}
        </span>
      )}
      <div className={`${todo.isCompleted ? "completed" : ""}`}>
        <div className="todoIcons">
          <span
            onClick={noteShowHide}
            {...(checkNull(todo.content)
              ? {
                  style: {
                    visibility: "hidden",
                  },
                }
              : {
                  style: {
                    visibility: "visible",
                  },
                })}
          >
            {todo.noteIsShow ? (
              <AiOutlineCaretDown color="#b2b2b2" />
            ) : (
              <AiOutlineCaretRight color="#b2b2b2" />
            )}
          </span>
          <span style={{ marginLeft: 0, marginRight: "5px" }}>
            {todo.isCompleted ? (
              <AiOutlineCheckSquare onClick={onComplete} color="#009688" />
            ) : (
              <AiOutlineBorder onClick={onComplete} color="#5c5c5c" />
            )}
          </span>
        </div>
      </div>
      <div className="todoText">
        <div className="todoTextWrapper">
          <div className="todoTextMain">
            {todo.text || (
              <Skeleton
                style={{ height: "18px", borderRadius: "0" }}
                baseColor="#eee"
                highlightColor="#ccc"
                duration={1}
                count={1}
              />
            )}
          </div>
        </div>
      </div>
      <div className="todoIcons">
        <span className="dateStyle">
          <span
            style={{ color: "#777", fontWeight: "500", fontSize: "15px" }}
            className="dateTodo"
          >
            Due: {todo.dueDate.slice(0, -4)}
          </span>

          <span
            style={{ color: "#777", fontWeight: "500", fontSize: "15px" }}
            className="dateTodo"
          >
            Added: {todo.date.slice(0, -4)}
          </span>
        </span>
        <span className="hide">
          <span>
            <AiOutlineBars
              onClick={changeTodo}
              color="#009688"
              title="Priority"
            />
          </span>
          <span>
            <AiOutlineEdit onClick={onEdit} color="#009688" title="Edit" />
          </span>
          <span style={{ marginRight: "8px" }}>
            <AiOutlineDelete
              onClick={onDelete}
              color="#009688"
              title="Delete"
            />
          </span>
        </span>
      </div>
      {todo.noteIsShow && (
        <div
          className="todoContent"
          style={{
            backgroundColor: todo.contentColor,
            borderLeft: `4px groove ${todo.color}`,
          }}
        >
          {todo.content || (
            <Skeleton
              style={{ height: "18px", borderRadius: "0" }}
              baseColor="#eee"
              highlightColor="#ccc"
              duration={1}
              count={1}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Todo;
