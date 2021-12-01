import { useState } from "react";
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

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  const [note, setNote] = useState({ isShow: false });
  const [periority, setPeriority] = useState({
    color: "#fff",
    contentColor: "#fff",
    counter: 0,
  });

  const noteShowHide = () => {
    setNote({ isShow: !note.isShow });
  };

  const changePeriority = () => {
    switch (periority.counter) {
      case -1:
        setPeriority({
          ...periority,
          color: "#fff",
          contentColor: "#fff",
          counter: periority.counter + 1,
        });
        break;
      case 0:
        setPeriority({
          ...periority,
          color: "#ff7700",
          contentColor: "#FFF2E6",
          counter: periority.counter + 1,
        });
        break;
      case 1:
        setPeriority({
          ...periority,
          color: "#ff3333",
          contentColor: "#FFEEEE",
          counter: periority.counter + 1,
        });
        break;
      case 2:
        setPeriority({
          ...periority,
          color: "#3377ff",
          contentColor: "#EBF1FF",
          counter: -1,
        });
        break;
      default:
        setPeriority({ ...periority, counter: 0 });
        break;
    }
  };
  return (
    <div
      className={!todo.isCompleted ? "todo" : "todoIsCompleted"}
      style={{
        borderLeft: `${
          todo.isCompleted
            ? "1px solid rgb(225, 225, 225)"
            : periority.counter === 0
            ? "1px solid #e1e1e1"
            : `3px solid ${periority.color}`
        }`,
      }}
      {...(note.isShow && {
        style: {
          paddingTop: "19px",
          borderLeft: `${
            todo.isCompleted
              ? "1px solid rgb(225, 225, 225)"
              : periority.counter === 0
              ? "1px solid #e1e1e1"
              : `3px solid ${periority.color}`
          }`,
        },
      })}
    >
      {periority.counter !== 0 && (
        <span
          className="periorityTodo"
          {...(note.isShow
            ? {
                style: {
                  display: `${todo.isCompleted ? "none" : "block"}`,
                  backgroundColor: `${
                    todo.isCompleted ? "none" : periority.color
                  }`,
                  marginLeft: `${periority.counter < 0 && "-19px"}`,
                  padding: `${periority.counter < 0 && "3px 3px 3px 7px"}`,
                },
              }
            : {
                style: {
                  display: `${todo.isCompleted ? "none" : "block"}`,
                  backgroundColor: `${
                    todo.isCompleted ? "none" : periority.color
                  }`,
                  marginLeft: `${periority.counter < 0 && "-19px"}`,
                  padding: `${periority.counter < 0 && "3px 3px 3px 7px"}`,
                },
              })}
        >
          {periority.counter < 0 ? periority.counter : "+" + periority.counter}
        </span>
      )}
      <div className={`${todo.isCompleted ? "completed" : ""}`}>
        <div className="todoIcons">
          <span onClick={noteShowHide}>
            {note.isShow ? (
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
          {todo.date || (
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
              onClick={changePeriority}
              color="#009688"
              title="Change Periority"
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
      {note.isShow && (
        <div
          className="todoContent"
          style={{
            backgroundColor: periority.contentColor,
            borderLeft: `4px groove ${periority.color}`,
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
