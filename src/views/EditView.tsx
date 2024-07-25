import CreateTodoButton from "../components/EditView/CreateTodoButton";
import EditTodo from "../components/EditView/EditTodo";
import EditTodoContainer from "../components/EditView/EditTodoContainer";
import { useTodoListStore } from "../stores/TodoListStore"

export default function EditView() {
  const todoList = useTodoListStore();

  return (
    <>
      <h2>Edit Mode</h2>
      <EditTodoContainer>
        {todoList.todos.map(todo => <EditTodo key={todo.id} todo={todo} />)}
      </EditTodoContainer>
      <CreateTodoButton />
    </>
  )
}
