import { ReactNode, createContext, useState, useContext } from "react";

// createContext
// provider
// suppler

export type proptype = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type contexttype = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  checkToggleHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
};

export const todoContext = createContext<contexttype | null>(null);

export const TodoProvider = ({ children }: proptype) => {
  const [todo, setTodo] = useState<Todo[]>(() => {
    try {
      const newTodo = localStorage.getItem("Todo") || "[]";
      return JSON.parse(newTodo) as Todo[];
    } catch (error) {
      return [];
    }
  });

  const handleAddTodo = (task: string) => {
    if (task) {
      setTodo((prev) => {
        const newTodo: Todo[] = [
          {
            id: Math.random().toString(),
            task: task,
            completed: false,
            createdAt: new Date(),
          },
          ...prev,
        ];
        localStorage.setItem("Todo", JSON.stringify(newTodo));
        return newTodo;
      });
    }
  };

  const checkToggleHandler = (id: string) => {
    setTodo((prev) => {
      const completedFilter = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return completedFilter;
    });
  };
  const deleteHandler = (id: string) => {
    setTodo((prev) => {
      const newData = prev.filter((todo) => {
        return todo.id !== id;
      });
      localStorage.setItem("Todo", JSON.stringify(newData));

      return newData;
    });
  };

  return (
    <todoContext.Provider
      value={{ todos: todo, handleAddTodo, checkToggleHandler, deleteHandler }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodo = () => {
  const todoConsumer = useContext(todoContext);
  if (!todoConsumer) {
    throw new Error("Forget to wrap the provider");
  }
  return todoConsumer;
};
