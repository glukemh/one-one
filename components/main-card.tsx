import { useState, useRef, useEffect } from 'react'
import h2Styles from '../styles/h2.module.css'
import Card from './card'
import SVGText from './svg-text'

interface MainCardProps {
  blogData: {
    slug: string
    metadata: Record<string, string>
  }
}

const MainCard = ({ blogData }: MainCardProps) => {
  const {
    slug,
    metadata: { title },
  } = blogData
  const handleCardClick = () => {
    window.location.href = '/blog/' + slug
  }
  return (
    <Card onClick={handleCardClick}>
      <h2 className={h2Styles.h2}>
        <SVGText>{title}</SVGText>
      </h2>
    </Card>
  )
}

export default MainCard
