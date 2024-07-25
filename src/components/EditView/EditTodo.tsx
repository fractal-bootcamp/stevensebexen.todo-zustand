import { ChangeEvent, useEffect, useRef } from "react";
import { useTodoListStore } from "../../stores/TodoListStore";
import { Todo } from "../../types";
import styles from './styles.module.sass'

function scaleTextArea(target: HTMLTextAreaElement) {
  // Failure to set height to 1px first causes the textarea to increase in size as you start typing.
  // This is because scrollHeight is rounded, and will slowly round up from the previous size.
  target.style.height = '1px';
  target.style.height = `${target.scrollHeight}px`;
}

type EditTodoProps = {
  todo: Todo;
};

export default function EditTodo(props: EditTodoProps) {
  const { todo } = props;

  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const todoList = useTodoListStore();

  // Scale textarea to correct size on mount.
  useEffect(() => {
    if (!descriptionRef.current) return;
    scaleTextArea(descriptionRef.current);
  }, [descriptionRef]);

  function onChange(field: 'title' | 'description', value: string) {
    const toUpdate: Todo = {...todo, [field]: value};
    todoList.updateTodo(toUpdate);
  }

  function onDelete() {
    todoList.deleteTodo(todo);
  }

  function onDescriptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
    scaleTextArea(e.target);
    onChange('description', e.target.value);
  }

  return (
    <div className={styles.editTodo}>
      <div className={styles.editTodoForm}>
        <input className={styles.title} value={todo.title} onChange={e => onChange('title', e.target.value)} placeholder='Title' />
        <textarea className={styles.description} value={todo.description} onChange={onDescriptionChange} placeholder='Description' ref={descriptionRef} />
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>X</button>
    </div>
  )
}