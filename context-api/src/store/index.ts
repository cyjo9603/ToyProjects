import { createContext, Dispatch } from 'react';

import { AddTodoReturn, ADD_TODO } from './addTodo';
import { DeleteTodoReturn, DELETE_TODO } from './deleteTodo';

export interface Todo {
  id: number;
  content: string;
}

interface InitailState {
  count: number;
  todos: Todo[];
}

export const initialState: InitailState = {
  count: 0,
  todos: [],
};

interface ContextProps extends InitailState {
  dispatch: Dispatch<Action>;
}

type Action = AddTodoReturn | DeleteTodoReturn;

export const reducer = (state: InitailState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO: {
      const id = state.count + 1;
      return {
        ...state,
        count: id,
        todos: [...state.todos, { id, content: action.content }],
      };
    }
    case DELETE_TODO: {
      const deleteIndex = state.todos.findIndex((todo) => todo.id === action.id);
      const deletedTodos = [...state.todos];
      deletedTodos.splice(deleteIndex, 1);
      return { ...state, todos: deletedTodos };
    }
  }
};

export default createContext<ContextProps>({ ...initialState, dispatch: () => {} });
