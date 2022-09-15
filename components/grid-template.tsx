import { ReactNode } from 'react'
import useCustomProperties from '../hooks/useCustomProperties'
import styles from '../styles/grid-template.module.css'

type GridTemplateProps = {
  children: ReactNode
  gridRepeat?: number | 'auto-fill' | 'auto-fit'
  gridMinColumn?: string
  gridMaxColumn?: string
  gridGap?: string
}

const GridTemplate = ({ children, ...customPropertyProps }: GridTemplateProps) => {
  const divRef = useCustomProperties<HTMLDivElement>(customPropertyProps)

  return (
    <div ref={divRef} className={styles['grid-template-column']} style={{ width: '100%' }}>
      {children}
    </div>
  )
}

export default GridTemplate
