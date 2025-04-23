import { Todo } from '../../model';

interface TodoItemProps {
  todo: Todo;
  handleToggleTodo: (id: number, completed: boolean) => void;
  handleRemoveTodo: (id: number) => void;
}

const TodoItem = ({ todo, handleToggleTodo, handleRemoveTodo }: TodoItemProps) => {
  return (
    <li
      key={todo.id}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => handleToggleTodo(todo.id, e.target.checked)}
      />
      {todo.text}
      <button onClick={() => handleRemoveTodo(todo.id)}>删除</button>
    </li>
  );
};

export default TodoItem;
