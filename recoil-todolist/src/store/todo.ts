import { atom } from 'recoil';

export interface Todo {
  id: number;
  content: string;
}

export const todoStore = atom<Todo[]>({
  key: 'todo',
  default: [],
});
