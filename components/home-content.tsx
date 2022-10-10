import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Card from './card'
import H2 from './h2'
import styles from '../styles/home.module.css'
import TextSVG from './text-symbol-svg'

interface HomeContentProps {
  slugs: string[]
  metadata: Record<string, string>[]
}

const HomeContent = ({ metadata, slugs }: HomeContentProps) => {
  // svg text element ref list
  // const [getComputedStyle, setGetComputedStyle] = useState<
  //   (elt: Element, pseudoElt?: string | null | undefined) => CSSStyleDeclaration
  // >(() => () => ({ fontSize: '16px' } as CSSStyleDeclaration))
  const slugsAndMetadata = slugs.map((slug, i) => ({ slug, metadata: metadata[i] }))

  const textElRefs = useRef<SVGTextElement[]>([])
  const [fontSizes, setFontSizes] = useState<number[]>(textElRefs.current.map(() => 16))
  useEffect(() => {
    setFontSizes(textElRefs.current.map(el => parseInt(getComputedStyle(el).fontSize)))
  }, [])

  const handleCardClick = (slug: string) => {
    window.location.href = window.origin + '/blog/' + slug
  }

  return (
    <main>
      <section aria-label="Blog Posts">
        <div className={styles['main-grid']}>
          {slugsAndMetadata.map(({ slug, metadata }, index) => (
            <Card key={slug} onClick={() => handleCardClick(slug)}>
              <H2>
                <TextSVG
                  text={metadata.title}
                  symbolElProps={{ id: `symbol${slug}` }}
                  textElProps={{
                    x: 0,
                    y: fontSizes[index],
                    ref: (ref: SVGTextElement) => textElRefs.current.push(ref),
                  }}
                >
                  <use href={`#symbol${slug}`} style={{ fill: 'currentcolor' }} />
                </TextSVG>
              </H2>
              <Link href={`/blog/${slug}`}>
                <a style={{ position: 'fixed', pointerEvents: 'none', opacity: 0 }}>Read More</a>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomeContent
