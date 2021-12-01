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
            : todo.counter === 0
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
              : todo.counter === 0
              ? "1px solid #e1e1e1"
              : `3px solid ${todo.color}`
          }`,
        },
      })}
    >
      {todo.counter !== 0 && (
        <span
          className="periorityTodo"
          {...(todo.noteIsShow
            ? {
                style: {
                  display: `${todo.isCompleted ? "none" : "block"}`,
                  backgroundColor: `${todo.isCompleted ? "none" : todo.color}`,
                  marginLeft: `${todo.counter < 0 && "-19px"}`,
                  padding: `${todo.counter < 0 && "3px 3px 3px 7px"}`,
                },
              }
            : {
                style: {
                  display: `${todo.isCompleted ? "none" : "block"}`,
                  backgroundColor: `${todo.isCompleted ? "none" : todo.color}`,
                  marginLeft: `${todo.counter < 0 && "-19px"}`,
                  padding: `${todo.counter < 0 && "3px 3px 3px 7px"}`,
                },
              })}
        >
          {todo.counter < 0 ? todo.counter : "+" + todo.counter}
        </span>
      )}
      <div className={`${todo.isCompleted ? "completed" : ""}`}>
        <div className="todoIcons">
          <span onClick={noteShowHide}>
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
        <span className="dateTodo">
          {todo.date.slice(0, -4) || (
            <Skeleton
              style={{ height: "18px", borderRadius: "0" }}
              baseColor="#eee"
              highlightColor="#ccc"
              duration={1}
              count={1}
            />
          )}
        </span>
        <span className="hide">
          <span>
            <AiOutlineBars
              onClick={changeTodo}
              color="#009688"
              title="Change todo"
            />
          </span>
          <span>
            <AiOutlineEdit onClick={onEdit} color="#009688" title="Edit TODO" />
          </span>
          <span style={{ marginRight: "8px" }}>
            <AiOutlineDelete
              onClick={onDelete}
              color="#009688"
              title="Delete TODO"
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
