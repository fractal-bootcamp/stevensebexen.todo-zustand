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
    <div className={styles.editTodoItem}>
      <input value={todo.title} onChange={e => onChange('title', e.target.value)} />
      <input value={todo.description} onChange={e => onChange('description', e.target.value)} />
      <button onClick={onDelete}>X</button>
    </div>
  )
}