import SVGChar from './svg-char'

interface SVGTextProps {
  children: string
}

const SVGText = ({ children }: SVGTextProps) => {
  const chars = children.split('')
  return (
    <span style={{ position: 'relative' }}>
      <span style={{ position: 'absolute', inset: 0, opacity: 0 }}>{children}</span>
      <span aria-hidden>
        {chars.map((char, i) => {
          return <SVGChar key={i}>{char}</SVGChar>
        })}
      </span>
    </span>
  )
}

export default SVGText
