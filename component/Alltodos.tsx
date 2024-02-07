import React from "react";
import { useTodo } from "./store/Todos";
import { useSearchParams } from "react-router-dom";

const Alltodos = () => {
  const [searchParams] = useSearchParams();
  const { todos, checkToggleHandler, deleteHandler } = useTodo();
  let filteredTodo = todos.reverse();
  const todoParams = searchParams.get("todos");
  if (todoParams == "Active") {
    filteredTodo = filteredTodo.filter((todo) => !todo.completed);
  }
  if (todoParams == "completed") {
    filteredTodo = filteredTodo.filter((todo) => todo.completed);
  }

  return (
    <div>
      <ul className="showtodo">
        {filteredTodo.map((todo) => {
          return (
            <>
              <li className={todo.completed ? "completedtsk" : "incompleteTsk"}>
                <input
                  id={`todo-${todo.id}`}
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    checkToggleHandler(todo.id);
                  }}
                />

                <label htmlFor={`todo-${todo.id}`}> {todo.task}</label>
                {todo.completed && (
                  <button
                    type="button"
                    className=""
                    onClick={() => {
                      deleteHandler(todo.id);
                    }}
                  >
                    Delete
                  </button>
                )}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Alltodos;
