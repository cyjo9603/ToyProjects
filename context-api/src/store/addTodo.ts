export const ADD_TODO = 'ADD_TODO';

export interface AddTodoReturn {
  type: typeof ADD_TODO;
  content: string;
}

export const addTodoAction = (content: string): AddTodoReturn => ({ type: ADD_TODO, content });
