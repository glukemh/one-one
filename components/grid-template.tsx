import { ReactNode } from 'react'
import styles from '../styles/grid-template.module.css'

const GridAuto = ({ children }: { children: ReactNode }) => {
  return <div className={styles['grid-template-column']}>{children}</div>
}
