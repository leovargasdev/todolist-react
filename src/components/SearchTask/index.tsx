import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

interface SearchTaskProps {
  onSearch: (text: string) => void
}

export const SearchTask = ({ onSearch }: SearchTaskProps) => {
  const [textSearch, setTextSearch] = useState<string>('')

  useEffect(() => {
    onSearch(textSearch.toLocaleLowerCase())
  }, [textSearch])

  return (
    <input
      className={styles.container}
      value={textSearch}
      placeholder="Filtre as suas tarefas"
      onChange={(event) => setTextSearch(event.target.value)}
    />
  )

}