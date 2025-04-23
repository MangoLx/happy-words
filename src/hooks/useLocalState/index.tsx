import { createContext, useContext, Dispatch, useReducer } from 'react';

const createPageStore = <
  State,
  Action extends { type: string; payload?: unknown }
>(
  initialState: State,
  reducer: (state: State, action: Action) => State
) => {
  const StoreContext = createContext<[State, Dispatch<Action>] | undefined>(
    undefined
  );

  const useLocalStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
      throw new Error('useStore 必须在 StoreProvider 中使用');
    }
    return context;
  };

  const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    const store = useReducer(reducer, initialState);
    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    );
  };

  return {
    StoreProvider,
    useLocalStore,
  };
};

export default createPageStore;
