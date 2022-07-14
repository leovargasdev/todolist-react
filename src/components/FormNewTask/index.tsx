import {v4 as uuid} from "uuid"
import { FaPlus } from 'react-icons/fa'
import { FormEvent, useState } from 'react'

import { Task } from 'types/task'
import { Input } from "components/Input"

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
      visible: true,
    }
    
    addNewTask(newTask)
    setTask('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        placeholder="Digite a sua tarefa"
        onChange={(event) => setTask(event.target.value)}
      />

      <button type="submit" className={styles.form__button} disabled={!task}>
        <FaPlus size={12} /> Adicionar
      </button>
    </form>
  )
}