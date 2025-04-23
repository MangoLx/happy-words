/**
 * 提供Todo相关的store
 * 导出StoreProvider和useLocalStore
 * @see ../constant.ts - 定义了action类型
 * @see ../action.ts - 提供了action创建函数
 */
import createPageStore from '@/hooks/useLocalState';
import {
  TodoState,
  TodoAction,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
} from './type';
// 定义初始状态
const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

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

export { StoreProvider, useLocalStore };
