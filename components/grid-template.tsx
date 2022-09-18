import { ReactNode, CSSProperties } from 'react'
import type * as CSS from 'csstype'
import useCustomProperties from '../hooks/useCustomProperties'
import useClassNames from '../hooks/useClassNames'
import styles from '../styles/grid-template.module.css'

type GridStyle =
  | CSSProperties
  | {
      '--repeat-columns'?: number | 'auto-fill' | 'auto-fit'
      '--minmax-min-columns'?: string
      '--minmax-max-columns'?: string
      '--repeat-rows'?: number | 'auto-fill' | 'auto-fit'
      '--minmax-min-rows'?: string
      '--minmax-max-rows'?: string
    }

interface GridTemplateProps {
  children: ReactNode
  className?: string
  template?: {
    rows?: {
      '--repeat-rows'?: number | 'auto-fill' | 'auto-fit'
      '--minmax-min-rows'?: string
      '--minmax-max-rows'?: string
    }
    columns?: {
      '--repeat-columns'?: number | 'auto-fill' | 'auto-fit'
      '--minmax-min-columns'?: string
      '--minmax-max-columns'?: string
    }
  }
  style?: CSSProperties
}

const GridTemplate = ({ children, template, className = '', style }: GridTemplateProps) => {
  const divRef = useCustomProperties<HTMLDivElement>({ ...style, ...template?.columns, ...template?.rows })
  const [classNames, setClassNames] = useClassNames([
    styles['grid-template'],
    [styles['grid-template-columns'], Boolean(template?.columns)],
    [styles['grid-template-rows'], Boolean(template?.rows)],
    className,
  ])

  return (
    <div ref={divRef} className={classNames}>
      {children}
    </div>
  )
}

export default GridTemplate
