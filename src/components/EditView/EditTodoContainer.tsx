import { PropsWithChildren } from "react";
import styles from './styles.module.sass';

type EditTodoContainerProps = {

};

export default function EditTodoContainer(props: PropsWithChildren<EditTodoContainerProps>) {
  return (
    <div className={styles.editTodoContainer}>
      {props.children}
    </div>
  )
}