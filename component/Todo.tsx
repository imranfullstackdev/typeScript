import Todoform from "./todoform";
import AllTodos from "./Alltodos";
import Navbar from "./Navbar";
import "./style.css"

const Todo = () => {
  return (
    <div className="mainContainer">
     <div>
     <h1 className="mainHeader">React-Todo using TypeScript</h1>
      <Navbar />
      <Todoform />
      <AllTodos />
     </div>
    </div>
  );
};

export default Todo;
