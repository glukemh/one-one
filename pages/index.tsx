import fs from 'fs'
import path from 'path'
import type { NextPage } from 'next'
import Meta from '../components/meta'
import HomeContent from '../components/home-content'
import extractMetadata from '../utils/extractMarkdownMetadata'

interface HomeProps {
  metadata: Record<string, string>[]
}

const Home = ({ metadata }: HomeProps) => {
  return (
    <>
      <Meta />
      <HomeContent metadata={metadata} />
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts')
  const metadata = files.map(fileName => {
    const file = fs.readFileSync(path.join('posts', fileName), 'utf-8')
    return extractMetadata(file).metadata
  })
  return {
    props: {
      metadata,
    },
  }
}

export default Home
