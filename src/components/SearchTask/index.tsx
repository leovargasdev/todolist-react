import styles from './styles.module.scss'

interface SearchTaskProps {
  onSearch: (text: string) => void
}

export const SearchTask = ({ onSearch }: SearchTaskProps) => (
  <input
    className={styles.container}
    placeholder="Pesquise por uma tarefa"
    onChange={(event) => onSearch(event.target.value.toLocaleLowerCase())}
  />
)