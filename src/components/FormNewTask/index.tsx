import {v4 as uuid} from "uuid"
import { FaPlus } from 'react-icons/fa'
import { FormEvent, useState } from 'react'

import { Task } from '../../types/task'

import styles from './styles.module.scss'

interface FormNewTaskProps {
  addNewTask: (task: Task) => void
}

export const FormNewTask = ({ addNewTask }: FormNewTaskProps) => {
  const [task, setTask] = useState<string>('')

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()

    const newTask = {
      id: uuid(),
      name: task,
      completed: false,
    }
    
    addNewTask(newTask)
    setTask('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        className={styles.form__input}
        placeholder="Digite a sua tarefa"
        onChange={(event) => setTask(event.target.value)}
      />

      <button type="submit" className={styles.form__button}>
        <FaPlus size={12} /> Adicionar
      </button>
    </form>
  )
}