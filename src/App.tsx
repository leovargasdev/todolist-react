import { useMemo, useState } from "react"
import { FaPlus } from 'react-icons/fa'

import styles from './app.module.scss'
import { FormNewTask } from "./components/FormNewTask"
import { TodoList } from "./components/TodoList"

interface Task {
  name: string
  completed: boolean
}

const App = () => {
  const [todolist, setTodoList] = useState<Task[]>([
    { name: 'Minicurso react', completed: false },
    { name: 'Cortar o cabelo', completed: true },
    { name: 'Lavar a louça', completed: false },
  ])

  const handleAddTask = (newTask: Task): void => {
    setTodoList([...todolist, newTask])
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

  const totalTasksCompleted = useMemo(() => {
    const result = todolist.filter(task => task.completed)

    return result.length
  }, [todolist])

  return (
    <div className={styles.container}>
      <h1>Todolist</h1>

      <FormNewTask addTask={handleAddTask} />

      <TodoList  todolist={todolist} removeTask={handleRemoveTask} completedTask={handleCompletedTask} />

      <p className={styles.footer}>
        Número de tarefas concluidas:
        <strong>{totalTasksCompleted}</strong>
      </p>
    </div>
  )
}

export default App
