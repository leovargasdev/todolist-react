import {v4 as uuid} from "uuid"
import { useCallback, useState } from "react"

import { Tasks } from "../components/Tasks"
import { SearchTask } from "../components/SearchTask"
import { FormNewTask } from "../components/FormNewTask"

import { Task } from "../types/task"
import styles from './app.module.scss'

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: uuid(), name: 'Curso de react', completed: false },
    { id: uuid(), name: 'Cortar o cabelo', completed: true },
    { id: uuid(), name: 'Lavar a louça', completed: false },
  ])
  const [tasksTemp, setTasksTemp] = useState<Task[]>([])

  const updateTasksTemp = () => {
    setTasksTemp(tasks)
  }

  const handleNewTask = (newTask: Task): void => {
    setTasks([...tasks, newTask])
    updateTasksTemp()
  }

  const handleCompletedTask = (taskId: string): void => {
    const taskIndex = tasks.findIndex(tasks => tasks.id === taskId)

    const taskUpdate = [...tasks]
    tasks[taskIndex].completed = !tasks[taskIndex].completed

    setTasks(taskUpdate)
    updateTasksTemp()
  }

  const handleRemoveTask = (taskId: string): void => {
    setTasks(state => state.filter(task => task.id !== taskId))
  }

  // const handleSearchTask = (taskName: string): void => {
  //   setTasks(tasksTemp.filter(task => task.name.toLocaleLowerCase().includes(taskName)))
  // }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Todolist</h1>

        <FormNewTask addNewTask={handleNewTask} />

        <hr />

        {/* <SearchTask onSearch={handleSearchTask} /> */}

        <Tasks tasks={tasks} removeTask={handleRemoveTask} completedTask={handleCompletedTask} />
      </div>
    </div>
  )
}

export default App
