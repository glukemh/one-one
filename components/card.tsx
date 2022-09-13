import { ReactNode } from 'react'
import styles from '../styles/card.module.css'

const Card = ({ children }: { children: ReactNode }) => {
  return <div className={styles['card-container']}>{children}</div>
}

export default Card
