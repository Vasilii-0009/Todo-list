export interface TodoList {
  error: string | null;
  status: string | null;
  todos: TodoItemType[];
}

export interface TodoItemType {
  id: number;
  title: string;
  completed: boolean;
}
