import { SVGProps, ReactNode } from 'react'

type TextSVGProps = {
  text: string
  symbolElProps: SVGProps<SVGSymbolElement>
  children: ReactNode
  textElProps: SVGProps<SVGTextElement> | { ref: (ref: SVGTextElement) => void }
  svgElProps?: SVGProps<SVGSVGElement>
}

const TextSVG = ({ text, textElProps, svgElProps, symbolElProps, children }: TextSVGProps) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...svgElProps}>
      <symbol {...symbolElProps}>
        <text {...textElProps}>{text}</text>
      </symbol>
      {children}
    </svg>
  )
}

export default TextSVG
