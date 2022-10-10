import fs from 'fs'
import path from 'path'
import Meta from '../components/meta'
import HomeContent from '../components/home-content'
import extractMetadata from '../utils/extractMarkdownMetadata'

interface HomeProps {
  slugs: string[]
  metadata: Record<string, string>[]
}

const Home = ({ metadata, slugs }: HomeProps) => {
  return (
    <>
      <Meta />
      <HomeContent metadata={metadata} slugs={slugs} />
    </>
  )
}

export const getStaticProps = async () => {
  const fileNames = fs.readdirSync('posts')
  const metadata = fileNames.map(fileName => {
    const file = fs.readFileSync(path.join('posts', fileName), 'utf-8')
    return extractMetadata(file).metadata
  })
  const slugs = fileNames.map(fileName => fileName.replace('.md', ''))
  return {
    props: {
      slugs,
      metadata,
    },
  }
}

export default Home
