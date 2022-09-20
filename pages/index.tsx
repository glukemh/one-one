import fs from 'fs'
import path from 'path'
import type { NextPage } from 'next'
import Meta from '../components/meta'
import HomeContent from '../components/home-content'

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <HomeContent />
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  files.map(fileName => {
    const file = fs.readFileSync(path.join('posts', fileName), 'utf-8')
  })
  return {
    props: {},
  }
}

export default Home
