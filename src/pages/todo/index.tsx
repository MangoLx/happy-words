import { StoreProvider } from './model';
import TodoList from './components/TodoList';

const ToDo = () => {
  return (
    <StoreProvider>
      <TodoList />
    </StoreProvider>
  );
};

export default ToDo;