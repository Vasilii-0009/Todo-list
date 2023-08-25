import ITodo from "../types/interface";
interface ITodoItem extends ITodo {
  onFnToggleTodo: (id: number) => void;
  onFnRemoveleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, onFnRemoveleTodo, onFnToggleTodo } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => onFnToggleTodo(id)}
      />
      {title}
      <button onClick={() => onFnRemoveleTodo(id)}>x</button>
    </div>
  );
};

export default TodoItem;
