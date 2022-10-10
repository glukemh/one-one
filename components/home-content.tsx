import { useRef, useEffect, useState } from 'react'
import Card from './card'
import H2 from './h2'
import styles from '../styles/home.module.css'
import TextSVG from './text-symbol-svg'

interface HomeContentProps {
  metadata: Record<string, string>[]
}

const HomeContent = ({ metadata }: HomeContentProps) => {
  // svg text element ref list
  // const [getComputedStyle, setGetComputedStyle] = useState<
  //   (elt: Element, pseudoElt?: string | null | undefined) => CSSStyleDeclaration
  // >(() => () => ({ fontSize: '16px' } as CSSStyleDeclaration))

  const textElRefs = useRef<SVGTextElement[]>([])
  const [fontSizes, setFontSizes] = useState<number[]>(textElRefs.current.map(() => 16))
  console.log(metadata)
  useEffect(() => {
    setFontSizes(textElRefs.current.map(el => parseInt(getComputedStyle(el).fontSize)))
  }, [])
  return (
    <main>
      <section aria-label="Blog Posts">
        <div className={styles['main-grid']}>
          {metadata.map(({ title }, index) => (
            <Card key={title}>
              <H2>
                <TextSVG
                  text={title}
                  symbolElProps={{ id: `symbol${title}` }}
                  textElProps={{
                    x: 0,
                    y: fontSizes[index],
                    ref: (ref: SVGTextElement) => textElRefs.current.push(ref),
                  }}
                >
                  <use href={`#symbol${title}`} style={{ fill: 'currentcolor' }} />
                </TextSVG>
              </H2>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomeContent
