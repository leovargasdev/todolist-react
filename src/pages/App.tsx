import {v4 as uuid} from "uuid"
import { useCallback, useMemo, useState } from "react"

import { Tasks } from "../components/Tasks"
import { SearchTask } from "../components/SearchTask"
import { FormNewTask } from "../components/FormNewTask"

import { Task } from "../types/task"
import styles from './app.module.scss'

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: uuid(), name: 'Curso de react', visible: true, completed: false },
    { id: uuid(), name: 'Cortar o cabelo', visible: true, completed: true },
    { id: uuid(), name: 'Lavar a louça', visible: true, completed: false },
  ])

  const handleNewTask = (newTask: Task): void => {
    setTasks([...tasks, newTask])
  }

  const handleCompletedTask = (taskId: string): void => {
    const taskIndex = tasks.findIndex(tasks => tasks.id === taskId)

    const taskUpdate = [...tasks]
    tasks[taskIndex].completed = !tasks[taskIndex].completed

    setTasks(taskUpdate)
  }

  const handleRemoveTask = (taskId: string): void => {
    setTasks(state => state.filter(task => task.id !== taskId))
  }

  const handleSearchTask = (taskName: string): void => {
    setTasks(state => state.map(task => ({
      ...task,
      visible: task.name.toLocaleLowerCase().includes(taskName)
    })))
  }

  const totalTasks: number = useMemo(() => tasks.length, [tasks])

  const totalTasksCompleted: number = useMemo(() => {
    const tasksCompleted = tasks.filter(task => task.completed)

    return tasksCompleted.length
  }, [tasks])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Todolist</h1>

        <FormNewTask addNewTask={handleNewTask} />

        <hr />

        <SearchTask onSearch={handleSearchTask} />

        <Tasks tasks={tasks} removeTask={handleRemoveTask} completedTask={handleCompletedTask} />

        <footer>
          <span>
            Total de tarefas: <strong>{totalTasks}</strong>
          </span>
          <span>
            Total de finalizadas: <strong>{totalTasksCompleted}</strong>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default App
