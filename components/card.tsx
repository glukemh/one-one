import { ReactNode } from 'react'
import styles from '../styles/card.module.css'
// import click event type
import { MouseEvent } from 'react'
interface CardProps {
  children: ReactNode
  onClick: (e: MouseEvent<HTMLDivElement>) => void
}

const Card = ({ children, onClick }: CardProps) => {
  return (
    <div className={styles['card-container']} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
