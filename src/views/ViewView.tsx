import ViewTodo from "../components/ViewView/ViewTodo";
import ViewTodoContainer from "../components/ViewView/ViewTodoContainer";
import { useTodoListStore } from "../stores/TodoListStore"

export default function ViewView() {
  const todoList = useTodoListStore();

  return (
    <>
      <h2>Your Notes</h2>
      <ViewTodoContainer>
        {todoList.todos.map(todo => <ViewTodo todo={todo} />)}
      </ViewTodoContainer>
    </>
  )
}
