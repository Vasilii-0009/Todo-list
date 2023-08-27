import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header/Headet";
import { TodoListPage } from "./TodoListPage/TodoListPage";
import { AboutePage } from "./AboutePage/AboutePage";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/">
            <TodoListPage />
          </Route>

          <Route path="/aboute">
            {" "}
            <AboutePage />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
