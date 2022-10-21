import { useRef, useEffect, useState } from 'react'
import MainCard from './main-card'
import styles from '../styles/home.module.css'

interface HomeContentProps {
  slugs: string[]
  metadata: Record<string, string>[]
}

const HomeContent = ({ metadata, slugs }: HomeContentProps) => {
  // svg text element ref list
  // const [getComputedStyle, setGetComputedStyle] = useState<
  //   (elt: Element, pseudoElt?: string | null | undefined) => CSSStyleDeclaration
  // >(() => () => ({ fontSize: '16px' } as CSSStyleDeclaration))
  const blogData = slugs.map((slug, i) => ({ slug, metadata: metadata[i] }))

  const textElRefs = useRef<SVGTextElement[]>([])
  const [fontSizes, setFontSizes] = useState<number[]>(textElRefs.current.map(() => 16))
  useEffect(() => {
    setFontSizes(textElRefs.current.map(el => parseInt(getComputedStyle(el).fontSize)))
  }, [])

  return (
    <main>
      <section aria-label="Blog Posts">
        <div className={styles['main-grid']}>
          {blogData.map((data, index) => (
            <MainCard key={data.slug} blogData={data} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomeContent
