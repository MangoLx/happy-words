export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';

// 2. 定义 Action 类型
export type TodoAction =
  | { type: typeof ADD_TODO; payload: { text: string } }
  | { type: typeof REMOVE_TODO; payload: { id: number } }
  | { type: typeof TOGGLE_TODO; payload: { id: number; completed: boolean } }
  | {
      type: typeof SET_FILTER;
      payload: { filter: 'all' | 'active' | 'completed' };
    };

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// 3. 定义状态类型
export interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}