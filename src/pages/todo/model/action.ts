/**
 * 提供Todo相关的action创建函数
 * 配合store.ts中的reducer使用
 * @see ../constant.ts - 定义了action类型
 * @see ../store.ts - 实现了状态更新逻辑
 */
import { TodoAction, ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_FILTER } from './type';

export const addTodo = (text: string): TodoAction => ({
  type: ADD_TODO,
  payload: { text },
});

export const removeTodo = (id: number): TodoAction => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const toggleTodo = (id: number, completed: boolean): TodoAction => ({
  type: TOGGLE_TODO,
  payload: { id, completed },
});

export const setFilter = (filter: 'all' | 'active' | 'completed'): TodoAction => ({
  type: SET_FILTER,
  payload: { filter },
});
