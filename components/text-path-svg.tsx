import { SVGProps } from 'react'

const TextSVG = ({
  text,
  pathElProps,
  svgElProps,
  textPathElProps,
}: {
  text: string
  pathElProps: SVGProps<SVGPathElement>
  svgElProps: SVGProps<SVGSVGElement>
  textPathElProps: SVGProps<SVGTextPathElement>
}) => {
  const id = pathElProps.id || Math.random().toString(36).slice(2)
  return (
    <svg {...svgElProps}>
      <path id={id} {...pathElProps} />

      <text>
        <textPath href={`#${id}`} {...textPathElProps}>
          {text}
        </textPath>
      </text>
    </svg>
  )
}

export default TextSVG
