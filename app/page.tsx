import { TodoClient } from "@/components/client"
import { TodoApp } from "@/components/todo-app"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-[600px] mx-auto my-6 py-6 px-4">
      <TodoClient />
      <TodoApp />
    </div>
  )
}
