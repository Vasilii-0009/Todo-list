import "./App.css";
import { Header } from "./Header/Headet";
import { TodoListPage } from "./TodoListPage/TodoListPage";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <TodoListPage />
      </div>
    </>
  );
};

export default App;
