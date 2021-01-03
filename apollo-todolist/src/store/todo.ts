import { makeVar } from '@apollo/client';

export interface Todo {
  id: number;
  content: string;
}
const todoIdCounterVar = makeVar(0);
const todoVar = makeVar<Todo[]>([]);

export const addTodo = (content: string) => {
  const prevId = todoIdCounterVar();
  const currentTodo = todoVar();
  const newTodo = { id: prevId + 1, content };
  todoVar([...currentTodo, newTodo]);
  todoIdCounterVar(prevId + 1);
};

export const deleteTodo = (id: number) => {
  const currentTodo = [...todoVar()];
  const deleteIndex = currentTodo.findIndex((todo) => todo.id === id);

  if (deleteIndex === -1) return;

  currentTodo.splice(deleteIndex, 1);
  todoVar(currentTodo);
};

export default todoVar;
