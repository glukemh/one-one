import { ReactNode, CSSProperties } from 'react'

interface GridProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

const Grid = ({ children, className = '', style }: GridProps) => {
  return (
    <div style={{ ...style, display: 'grid' }} className={className}>
      {children}
    </div>
  )
}

export default Grid
