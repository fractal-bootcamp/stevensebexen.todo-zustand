import { Todo } from "../../types";
import StatusSelector from "./StatusSelector";
import styles from './styles.module.sass';

type ViewTodoProps = {
  todo: Todo
}

export default function ViewTodo(props: ViewTodoProps) {
  const {todo} = props;
  return (
    <div className={styles.viewTodo}>
      <p className={styles.title}>{todo.title}</p>
      <p className={styles.description}>{todo.description}</p>
      <StatusSelector todo={todo} />
    </div>
  )
}