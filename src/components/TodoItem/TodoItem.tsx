import "./TodoItem.css";
import ITodo from "../types/interface";
interface ITodoItem extends ITodo {
  onFnToggleTodo: (id: number) => void;
  onFnRemoveleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, onFnRemoveleTodo, onFnToggleTodo } = props;
  return (
    <label className="todo__item ">
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={complete}
        onChange={() => onFnToggleTodo(id)}
      />
      <p className="todo__text">{title}</p>
      <i
        className="todo__delete material-icons red-text"
        onClick={() => onFnRemoveleTodo(id)}
      >
        delete
      </i>
    </label>
  );
};

export default TodoItem;
