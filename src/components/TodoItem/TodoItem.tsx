import "./TodoItem.css";
import type { TodoItemType } from "../../common/models/TodoItemType";
interface ITodoItem extends TodoItemType {
  onFnToggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = ({
  id,
  title,
  completed,
  onFnToggleTodo,
}) => {
  return (
    <label className="todo__item ">
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => onFnToggleTodo(id)}
      />
      <p className="todo__text">{title}</p>
    </label>
  );
};

export default TodoItem;
