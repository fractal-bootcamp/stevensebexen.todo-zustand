import { useTodoListStore } from "../../stores/TodoListStore";
import { Todo } from "../../types";
import styles from './styles.module.sass'

type EditTodoProps = {
  todo: Todo;
};
export default function EditTodo(props: EditTodoProps) {
  const todoList = useTodoListStore();
  const { todo } = props;

  function onChange(field: 'title' | 'description', value: string) {
    const toUpdate: Todo = {...todo, [field]: value};
    todoList.updateTodo(toUpdate);
  }

  function onDelete() {
    todoList.deleteTodo(todo);
  }

  return (
    <div className={styles.editTodo}>
      <div className={styles.editTodoForm}>
        <input className={styles.title} value={todo.title} onChange={e => onChange('title', e.target.value)} />
        <input className={styles.description} value={todo.description} onChange={e => onChange('description', e.target.value)} />
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>X</button>
    </div>
  )
}