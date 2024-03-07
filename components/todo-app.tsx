"use client"

import { AddTodoForm } from "./add-todo-form"
import { TodoList } from "./todo-list"
import { useSelectedTodo } from "@/hooks/use-selected-todo"

export const TodoApp = () => {
  const selectedTodo = useSelectedTodo((state) => state.todo)

  return (
    <div className="space-y-4">
      <AddTodoForm initialData={selectedTodo} />
      <TodoList />
    </div>
  )
}
