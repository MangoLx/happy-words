# 页面级别 Store

这个轻量级的页面级别 store 实现使用了 React 的 `useContext` 和 `useReducer` 钩子，为单个页面或组件提供状态管理能力。

## 特点

- 轻量级，无外部依赖
- 基于 React 原生 API
- TypeScript 支持
- 遵循 Redux 风格的状态管理模式
- 专注于单个页面或组件的状态管理

## 使用方法

### 1. 定义 Action 类型和状态类型

```typescript
// 定义 Action 常量
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// 定义 Action 类型
type TodoAction =
  | { type: typeof ADD_TODO; payload: { text: string } }
  | { type: typeof REMOVE_TODO; payload: { id: number } };

// 定义状态类型
interface TodoState {
  todos: { id: number; text: string }[];
}
```

### 2. 创建初始状态和 reducer

```typescript
// 初始状态
const initialState: TodoState = {
  todos: [],
};

// Reducer 函数
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload.text }
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};
```

### 3. 创建 Store

```typescript
import { createPageStore } from './usePageStore';

const { StoreProvider, useStore } = createPageStore<TodoState, TodoAction>(
  initialState,
  todoReducer
);
```

### 4. 使用 Provider 包裹组件

```tsx
// 在页面组件中使用
const TodoPage = () => {
  return (
    <StoreProvider>
      <TodoList />
    </StoreProvider>
  );
};
```

### 5. 在子组件中使用 Store

```tsx
const TodoList = () => {
  const [state, dispatch] = useStore();
  
  const addTodo = (text: string) => {
    dispatch({ type: ADD_TODO, payload: { text } });
  };
  
  const removeTodo = (id: number) => {
    dispatch({ type: REMOVE_TODO, payload: { id } });
  };
  
  return (
    <div>
      {/* 组件内容 */}
    </div>
  );
};
```

## 完整示例

查看 `example.tsx` 文件获取完整的 Todo 应用示例。 