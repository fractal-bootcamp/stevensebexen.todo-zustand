import { useTodoListStore } from '../../stores/TodoListStore';
import { TaskStatus, Todo } from '../../types';
import StatusSelectorOption, { StatusSelectorOptionProps } from './StatusSelectorOption';
import styles from './styles.module.sass';


const OPTIONS: Array<{taskStatus: TaskStatus, displayName: string}> = [
  {taskStatus: TaskStatus.PENDING, displayName: 'Pending'},
  {taskStatus: TaskStatus.IN_PROGRESS, displayName: 'In Progress'},
  {taskStatus: TaskStatus.COMPLETED, displayName: 'Completed'},
  {taskStatus: TaskStatus.ARCHIVED, displayName: 'Archived'}
];

type StatusSelectorProps = {
  todo: Todo;
}

export default function StatusSelector(props: StatusSelectorProps) {
  const {todo} = props;

  const todoList = useTodoListStore();

  function updateStatus(taskStatus: TaskStatus) {
    const toUpdate: Todo = {...todo, status: taskStatus};
    todoList.updateTodo(toUpdate);
  }

  return (
    <div className={styles.statusSelector}>
      {OPTIONS.map(option => 
          <StatusSelectorOption {...option} onClick={() => updateStatus(option.taskStatus)} currentStatus={todo.status} />
      )}
    </div>
  )
}