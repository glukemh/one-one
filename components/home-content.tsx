import { useRef, useEffect, useState } from 'react'
import Card from './card'
import H2 from './h2'
import styles from '../styles/home.module.css'
import TextSVG from './text-symbol-svg'

const HomeContent = () => {
  // svg text element ref list
  // const [getComputedStyle, setGetComputedStyle] = useState<
  //   (elt: Element, pseudoElt?: string | null | undefined) => CSSStyleDeclaration
  // >(() => () => ({ fontSize: '16px' } as CSSStyleDeclaration))

  const [blogs, setBlogs] = useState<number[]>([1, 2, 3, 4, 5, 6, 7])
  const textElRefs = useRef<SVGTextElement[]>([])
  const [fontSizes, setFontSizes] = useState<number[]>(textElRefs.current.map(() => 16))

  useEffect(() => {
    setFontSizes(textElRefs.current.map(el => parseInt(getComputedStyle(el).fontSize)))
  }, [])
  return (
    <main>
      <section aria-label="Blog Posts">
        <div className={styles['main-grid']}>
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <Card key={item}>
              <H2>
                <TextSVG
                  text={`blog ${item}`}
                  symbolElProps={{ id: `symbol${item}` }}
                  textElProps={{
                    x: 0,
                    y: fontSizes[index],
                    ref: (ref: SVGTextElement) => textElRefs.current.push(ref),
                  }}
                >
                  <use href={`#symbol${item}`} style={{ fill: 'currentcolor' }} />
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
