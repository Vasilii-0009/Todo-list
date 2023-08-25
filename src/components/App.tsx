import "./App.css";
import { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList/TodoList";
import ITodo from "./types/interface";

const App: React.FC = () => {
  const [isValue, setValue] = useState("");
  const [isArrTodo, setArrTodo] = useState<ITodo[]>([]);
  const inputFocus = useRef<HTMLInputElement>(null);
  console.log("inputFocus", inputFocus.current);
  const onFnAddToDo = () => {
    if (isValue) {
      setArrTodo([
        ...isArrTodo,
        {
          id: Date.now(),
          title: isValue,
          complete: false,
        },
      ]);
      setValue("");
    }
  };
  const onFnChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  //фокус в инпуте
  useEffect(() => {
    if (inputFocus.current) inputFocus.current.focus();
  }, []);
  //добавляем задачу в todo с помощью enter
  const onFnKeyDownInput: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      onFnAddToDo();
    }
  };
  const onFnToggleTodo = (id: number): void => {
    setArrTodo(
      isArrTodo.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };
  const onFnRemoveleTodo = (id: number): void => {
    setArrTodo(isArrTodo.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div>
        <input
          value={isValue}
          onChange={onFnChangeInput}
          ref={inputFocus}
          onKeyDown={onFnKeyDownInput}
        />
        <button type="button" onClick={onFnAddToDo}>
          Add To Do
        </button>
      </div>
      <TodoList
        items={isArrTodo}
        onFnToggleTodo={onFnToggleTodo}
        onFnRemoveleTodo={onFnRemoveleTodo}
      />
    </>
  );
};

export default App;
