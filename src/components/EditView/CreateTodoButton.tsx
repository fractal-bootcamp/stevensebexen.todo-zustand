import { useTodoListStore } from "../../stores/TodoListStore";

export default function CreateTodoButton() {
  const todoList = useTodoListStore();
  
  function onClick() {
    todoList.createTodo();
  }

  return (
    <button onClick={onClick}>New Todo</button>
  );
}