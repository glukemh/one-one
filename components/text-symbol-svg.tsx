import { SVGProps } from 'react'

const TextSVG = ({
  text,
  textElProps,
  svgElProps,
  symbolElProps,
  children,
}: {
  text: string
  textElProps: SVGProps<SVGTextElement>
  svgElProps: SVGProps<SVGSVGElement>
  symbolElProps: SVGProps<SVGSymbolElement>
  children: React.ReactNode
}) => {
  return (
    <svg {...svgElProps}>
      <symbol {...symbolElProps}>
        <text {...textElProps}>{text}</text>
      </symbol>
      {children}
    </svg>
  )
}

export default TextSVG
