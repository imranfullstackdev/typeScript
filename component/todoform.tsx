import { useState } from "react";
import { useTodo } from "./store/Todos";

const Todoform = () => {
  const { handleAddTodo } = useTodo();

  const [todo, setTodo] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="todoForm">
        <input
          type="text"
          className="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="formbtn">Add</button>
      </form>
    </div>
  );
};

export default Todoform;
