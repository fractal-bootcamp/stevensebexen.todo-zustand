import { PropsWithChildren } from "react";
import styles from './styles.module.sass';

type ViewTodoContainerProps = {

};

export default function ViewTodoContainer(props: PropsWithChildren<ViewTodoContainerProps>) {
  return (
    <div className={styles.viewTodoContainer}>
      {props.children}
    </div>
  )
}