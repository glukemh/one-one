import { useState, useRef, useEffect, useId } from 'react'
import TextSVG from './text-symbol-svg'

interface SVGCharProps {
  children: string
}

const SVGChar = ({ children }: SVGCharProps) => {
  const char = children
  const id = useId()
  const [charHeight, setCharHeight] = useState(0)
  const [charWidth, setCharWidth] = useState(0)
  const charRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const { width, height } = charRef.current?.getBoundingClientRect() || { width: 0, height: 0 }
    setCharHeight(height)
    setCharWidth(width)
  }, [])
  return (
    <span style={{ position: 'relative' }} ref={charRef}>
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <TextSVG
        svgElProps={{
          viewBox: `0 0 ${charWidth} ${charHeight}`,
          style: { position: 'absolute', inset: 0, width: '100%', height: '100%' },
          pointerEvents: 'none',
        }}
        symbolElProps={{ id }}
        text={char}
        textElProps={{
          x: 0,
          y: charHeight * 0.82,
        }}
      >
        <use href={`#${id}`} style={{ fill: 'currentColor' }} />
      </TextSVG>
    </span>
  )
}

export default SVGChar
