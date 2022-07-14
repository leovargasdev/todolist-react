import { FaTrashAlt } from 'react-icons/fa'

import { Task } from 'types/task'
import styles from './styles.module.scss'

interface TodosListProps {
  tasks: Task[]
  removeTask: (taskId: string) => void
  completedTask: (taskId: string) => void
}

export const Tasks = ({ tasks, removeTask, completedTask }: TodosListProps) => (
  <ul className={styles.tasks}>
    {tasks.map(task => task.visible && (
      <li key={task.id} className={`${styles.task} ${task.completed ? styles.active : '' }`} >

        <input
          type="checkbox"
          checked={task.completed}
          className={styles.task__checkbox}
          onChange={() => completedTask(task.id)}
        />

        <strong className={styles.task__name}>
          {task.name}
        </strong>

        <button
          type="button"
          className={styles.task__remove}
          onClick={() => removeTask(task.id)}
        >
          <FaTrashAlt size={16} />
        </button>

      </li>
    ))}
  </ul>
)