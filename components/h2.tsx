import { ReactNode } from 'react'
import styles from '../styles/h2.module.css'

const H2 = ({ children }: { children: ReactNode }) => {
  return <h2 className={styles.h2}>{children}</h2>
}

export default H2
