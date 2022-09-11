import type { NextPage } from 'next'
import HeadTag from '../components/head-tag'
import HomeContent from '../components/home-content'

const Home: NextPage = () => {
  return (
    <>
      <HeadTag />
      <HomeContent />
    </>
  )
}

export default Home
