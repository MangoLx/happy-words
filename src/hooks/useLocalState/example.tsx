import createPageStore from '.';

// 1. 定义 Action 常量
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_FILTER = 'SET_FILTER';

// 2. 定义 Action 类型
type TodoAction =
  | { type: typeof ADD_TODO; payload: { text: string } }
  | { type: typeof REMOVE_TODO; payload: { id: number } }
  | { type: typeof TOGGLE_TODO; payload: { id: number; completed: boolean } }
  | {
      type: typeof SET_FILTER;
      payload: { filter: 'all' | 'active' | 'completed' };
    };

// 3. 定义状态类型
interface TodoState {
  todos: { id: number; text: string; completed: boolean }[];
  filter: 'all' | 'active' | 'completed';
}

// 4. 定义初始状态
const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

// 5. 创建 action creators
const addTodo = (text: string): TodoAction => ({
  type: ADD_TODO,
  payload: { text },
});

const removeTodo = (id: number): TodoAction => ({
  type: REMOVE_TODO,
  payload: { id },
});

const toggleTodo = (id: number, completed: boolean): TodoAction => ({
  type: TOGGLE_TODO,
  payload: { id, completed },
});

const setFilter = (filter: 'all' | 'active' | 'completed'): TodoAction => ({
  type: SET_FILTER,
  payload: { filter },
});

// 6. 创建 reducer
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};

// 7. 创建页面 store
const { StoreProvider, useLocalStore } = createPageStore<TodoState, TodoAction>(
  initialState,
  todoReducer
);

// 8. 创建 Todo 列表组件
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

  // 根据过滤条件过滤 todos
  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === 'all') return true;
    if (state.filter === 'active') return !todo.completed;
    return todo.completed;
  });

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
        ))}
      </ul>
    </div>
  );
};

// 9. 页面组件，使用 StoreProvider 包裹
const TodoPage = () => {
  return (
    <StoreProvider>
      <TodoList />
    </StoreProvider>
  );
};

// 导出组件
export default TodoPage;
