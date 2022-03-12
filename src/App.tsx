import { useState } from "react"
import { FaPlus, FaCheck, FaTrashAlt } from 'react-icons/fa'

import styles from './app.module.scss'
import { TodoList } from "./components/TodoList"

interface Todo {
  name: string
  completed: boolean
}

const App = () => {
  const [taskName, setTaskName] = useState<string>('')
  const [todolist, setTodoList] = useState<Todo[]>([
    { name: 'Minicurso react', completed: false },
    { name: 'Cortar o cabelo', completed: true },
    { name: 'Lavar a louça', completed: false },
  ])

  const addTask = (): void => {
    const newTask = {
      name: taskName,
      completed: false,
      id: todolist.length + 1
    }
    setTodoList([...todolist, newTask])
    setTaskName('')
  }

  const handleCompletedTask = (taskIndex: number): void => {
    const todolistUpdate = [...todolist]
    todolistUpdate[taskIndex].completed = !todolistUpdate[taskIndex].completed

    setTodoList(todolistUpdate)
  }

  const handleRemoveTask = (taskName: string): void => {
    const todolistUpdate = todolist.filter(task => task.name !== taskName)
    setTodoList(todolistUpdate)
  }

  return (
    <div className={styles.container}>
      <h1>Todolist</h1>

      <div className={styles.newTask}>
        <input
          type="text"
          placeholder="Digite a sua tarefa"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button onClick={addTask}>
          <FaPlus />
          Adicionar tarefa
        </button>
      </div>

      <TodoList  todolist={todolist} removeTask={handleRemoveTask} completedTask={handleCompletedTask} />

    </div>
  )
}

export default App
