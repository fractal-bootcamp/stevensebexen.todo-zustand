import { useTodoListStore } from "../../stores/TodoListStore";
import styles from './styles.module.sass';

export default function CreateTodoButton() {
  const todoList = useTodoListStore();
  
  function onClick() {
    todoList.createTodo();
  }

  return (
    <button className={styles.createButton} onClick={onClick}>New Todo</button>
  );
}