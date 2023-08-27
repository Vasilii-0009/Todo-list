import { useState, useEffect, useRef } from "react";
import TodoItem from "../TodoItem/TodoItem";
import ITodo from "../types/interface";

export const TodoListPage: React.FC = () => {
  const [isValue, setValue] = useState("");
  const [isArrTodo, setArrTodo] = useState<ITodo[]>([]);
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const resLocalStorage = JSON.parse(
      localStorage.getItem("isArrTodo") || "[]"
    ) as ITodo[];
    setArrTodo(resLocalStorage);
  }, []);

  useEffect(() => {
    if (isArrTodo.length > 0) {
      localStorage.setItem("isArrTodo", JSON.stringify(isArrTodo));
    }
  }, [isArrTodo]);

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
          placeholder="Введите название дела"
        />
        <button
          className="waves-effect waves-light btn"
          type="button"
          onClick={onFnAddToDo}
        >
          Add To Do
        </button>
      </div>
      {isArrTodo.map((el) => (
        <TodoItem
          key={el.id}
          onFnToggleTodo={onFnToggleTodo}
          onFnRemoveleTodo={onFnRemoveleTodo}
          {...el}
        />
      ))}
    </>
  );
};
