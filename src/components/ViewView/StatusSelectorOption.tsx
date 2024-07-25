import { TaskStatus } from "../../types"
import styles from './styles.module.sass';

export type StatusSelectorOptionProps = {
  taskStatus: TaskStatus;
  currentStatus: TaskStatus;
  displayName: string;
  onClick: () => void;
};

export default function StatusSelectorOption(props: StatusSelectorOptionProps) {
  const className = [styles.statusSelectorOption, props.taskStatus === props.currentStatus && styles.active]
    .filter(x => Boolean(x)).join(' ');
  return (
    <button className={className} onClick={props.onClick}>
      {props.displayName}
    </button>
  )
}