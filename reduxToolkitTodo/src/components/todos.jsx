import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            <span className="todo-text">{todo.text}</span>

            <button
              className="delete-btn"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Todos;
