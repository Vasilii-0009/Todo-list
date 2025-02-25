import { render, screen, fireEvent } from "@testing-library/react";
import { TodoListPage } from "./TodoListPage";
import "@testing-library/jest-dom";

describe("TodoListPage Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders input and buttons", () => {
    render(<TodoListPage />);

    expect(
      screen.getByPlaceholderText("Введите название дела")
    ).toBeInTheDocument();
    expect(screen.getByText("Add To Do")).toBeInTheDocument();
    expect(screen.getByText("Clear completed")).toBeInTheDocument();
  });

  test("adds a new todo item", () => {
    render(<TodoListPage />);

    const input = screen.getByPlaceholderText("Введите название дела");
    const addButton = screen.getByText("Add To Do");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("clears completed todos", () => {
    render(<TodoListPage />);
    const input = screen.getByPlaceholderText("Введите название дела");
    const addButton = screen.getByText("Add To Do");
    const clearButton = screen.getByText("Clear completed");

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.click(addButton);

    const task1 = screen.getByText("Task 1");
    fireEvent.click(task1);

    fireEvent.click(clearButton);

    expect(screen.queryByText("Task 1")).toBeNull();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  test("filters active tasks", () => {
    render(<TodoListPage />);
    const input = screen.getByPlaceholderText("Введите название дела");
    const addButton = screen.getByText("Add To Do");
    const activeFilter = screen.getByText("Active");

    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.click(addButton);

    fireEvent.click(screen.getByText("Task 1")); // Завершаем задачу
    fireEvent.click(activeFilter);

    expect(screen.queryByText("Task 1")).toBeNull();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });
});
