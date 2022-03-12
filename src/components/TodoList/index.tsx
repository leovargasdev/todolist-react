import { FaCheck, FaTrashAlt } from 'react-icons/fa'

import styles from './styles.module.scss'

interface Todo {
  name: string
  completed: boolean
}

interface TodosListProps {
  todolist: Todo[]
  removeTask: (taskName: string) => void
  completedTask: (index: number) => void
}

export const TodoList = ({ todolist, removeTask, completedTask }: TodosListProps) => (
  <ul className={styles.tasks}>
    {todolist.map((item, index) => (
      <li key={item.name} className={`${styles.task} ${item.completed ? styles.active : '' }`} >
        <span onClick={() => completedTask(index)}>
          <FaCheck />
        </span>
        <strong>{item.name}</strong>
        <button type="button" onClick={() => removeTask(item.name)}>
          <FaTrashAlt />
        </button>
      </li>
    ))}
  </ul>
)