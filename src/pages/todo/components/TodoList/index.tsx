import { useLocalStore } from '../../model/store';
import { addTodo, removeTodo, toggleTodo, setFilter } from '../../model';
import TodoItem from '../TodoItem';
import { useMemo } from 'react';

const TodoList = () => {
  const [state, dispatch] = useLocalStore();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: number, completed: boolean) => {
    dispatch(toggleTodo(id, completed));
  };

  const handleFilterChange = (filter: 'all' | 'active' | 'completed') => {
    dispatch(setFilter(filter));
  };

  const filteredTodos = useMemo(
    () =>
      state.todos.filter((todo) => {
        if (state.filter === 'all') return true;
        if (state.filter === 'active') return !todo.completed;
        return todo.completed;
      }),
    [state.todos, state.filter]
  );

  return (
    <div>
      <h1>待办事项</h1>

      {/* 添加待办 */}
      <div>
        <input
          type="text"
          placeholder="添加新的待办..."
          onKeyPress={(e) => {
            if (e.key === 'Enter' && e.currentTarget.value.trim()) {
              handleAddTodo(e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
        />
      </div>

      {/* 过滤器 */}
      <div>
        <button onClick={() => handleFilterChange('all')}>
          全部 {state.filter === 'all' && '✓'}
        </button>
        <button onClick={() => handleFilterChange('active')}>
          未完成 {state.filter === 'active' && '✓'}
        </button>
        <button onClick={() => handleFilterChange('completed')}>
          已完成 {state.filter === 'completed' && '✓'}
        </button>
      </div>

      {/* 待办列表 */}
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggleTodo={handleToggleTodo}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
