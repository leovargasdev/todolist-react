import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

import styles from './styles.module.scss'

interface Task {
  name: string
  completed: boolean
}

interface FormNewTaskProps {
  addTask: (task: Task) => void
}

export const FormNewTask = ({ addTask }: FormNewTaskProps) => {
  const [taskName, setTaskName] = useState<string>('')

  const handleAddTask = () => {
    const newTask = {
      name: taskName,
      completed: false,
    }
    addTask(newTask)
    setTaskName('')
  }

  return (
    <div className={styles.newTask}>
      <input
        type="text"
        placeholder="Digite a sua tarefaaaaaa"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <button onClick={handleAddTask}>
        <FaPlus />
        Adicionar tarefa
      </button>
    </div>
  )
}