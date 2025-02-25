import { useState, useEffect, useRef, useMemo } from "react";
import TodoItem from "../TodoItem/TodoItem";
import type { TodoItemType } from "../../common/models/TodoItemType";
import "./TodoListPage.css";

enum OptionsTodo {
  all,
  active,
  completed,
}

export const TodoListPage: React.FC = () => {
  const [isValue, setValue] = useState("");
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [filter, setFilter] = useState<OptionsTodo>(OptionsTodo.all);
  const inputFocus = useRef<HTMLInputElement>(null);

  const onFnChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  //localStorage
  useEffect(() => {
    const resLocalStorage = JSON.parse(
      localStorage.getItem("todoList") || "[]"
    ) as TodoItemType[];
    setTodoList(resLocalStorage);
  }, []);

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  const onFnAddToDo = () => {
    if (isValue) {
      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          title: isValue,
          completed: false,
        },
      ]);
      setValue("");
    }
  };

  const onFnDeletedTodos = () => {
    const completedTodo = todoList.filter((item) => !item.completed);
    setTodoList(completedTodo);
  };

  const onFnToggleTodo = (id: number): void => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
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

  const filteredTodos = useMemo(() => {
    return todoList.filter((todo) =>
      filter === OptionsTodo.all
        ? true
        : filter === OptionsTodo.active
        ? !todo.completed
        : todo.completed
    );
  }, [todoList, filter]);

  const activeTasksCount = useMemo(() => {
    return todoList.filter((item) => !item.completed).length;
  }, [todoList]);
  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="brand-logo">Todo-list</div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li
              onClick={() => setFilter(OptionsTodo.all)}
              className="nav__item"
            >
              All
            </li>
            <li
              onClick={() => setFilter(OptionsTodo.active)}
              className="nav__item"
            >
              Active
            </li>
            <li
              onClick={() => setFilter(OptionsTodo.completed)}
              className="nav__item"
            >
              Completed
            </li>
          </ul>
        </div>
      </nav>

      <div className="wrapper">
        <input
          value={isValue}
          onChange={onFnChangeInput}
          ref={inputFocus}
          onKeyDown={onFnKeyDownInput}
          placeholder="Введите название дела"
        />
        <div className="btn__container">
          <div className="btn__box">
            <button
              className="waves-effect waves-light btn"
              type="button"
              onClick={onFnAddToDo}
            >
              Add To Do
            </button>
            <button
              className="waves-effect waves-light btn"
              type="button"
              onClick={onFnDeletedTodos}
            >
              Clear completed
            </button>
          </div>

          <div className="btn__count blue-grey">
            {activeTasksCount} items left
          </div>
        </div>
      </div>
      {filteredTodos.map((el) => (
        <TodoItem key={el.id} onFnToggleTodo={onFnToggleTodo} {...el} />
      ))}
    </>
  );
};
