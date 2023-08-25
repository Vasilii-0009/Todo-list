import TodoItem from "../TodoItem/TodoItem";
import ITodo from "../types/interface";

interface ITodoListProps {
  items: ITodo[];
  onFnToggleTodo: (id: number) => void;
  onFnRemoveleTodo: (id: number) => void;
}
const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, onFnToggleTodo, onFnRemoveleTodo } = props;
  return (
    <div>
      {items.map((el) => (
        <TodoItem
          key={el.id}
          onFnToggleTodo={onFnToggleTodo}
          onFnRemoveleTodo={onFnRemoveleTodo}
          {...el}
        />
      ))}
    </div>
  );
};

export default TodoList;
