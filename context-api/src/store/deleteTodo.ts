export const DELETE_TODO = 'DELETE_TODO';

export interface DeleteTodoReturn {
  type: typeof DELETE_TODO;
  id: number;
}

export const deleteTodoAction = (id: number): DeleteTodoReturn => ({ type: DELETE_TODO, id });
