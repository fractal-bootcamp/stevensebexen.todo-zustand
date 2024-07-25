import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TaskStatus, Todo } from "../types";

const defaultTodo = (id: number): Todo => ({
  id,
  title: 'Thing to do',
  description: 'But will it be doed?',
  status: TaskStatus.PENDING
});

type TodoListStore = {
  currentId: number;
  todos: Todo[];
  createTodo: () => void;
  deleteTodo: (toDelete: Todo) => void;
  updateTodo: (toUpdate: Todo) => void;
}

export const useTodoListStore = create<TodoListStore>()(
  persist(
    (set, get) => ({
      currentId: 0,
      todos: [],
      createTodo: () => set({todos: [...get().todos, defaultTodo(get().currentId)], currentId: get().currentId + 1}),
      deleteTodo: (toDelete: Todo) => set({todos: get().todos.filter(todo => todo.id !== toDelete.id)}),
      updateTodo: (toUpdate: Todo) => {
        const todos = get().todos;
        const toUpdateIndex = todos.findIndex(todo => todo.id === toUpdate.id);
        if (toUpdateIndex === -1) throw new Error (`Updating non-existent todo: ${toUpdate}`);
        set({todos: todos.with(toUpdateIndex, toUpdate)});
      }
    }),
    {
      name: 'todo-list-storage'
    }
  )
);