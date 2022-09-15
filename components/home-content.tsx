import Card from './card'
import H2 from './h2'
import styles from '../styles/home-content.module.css'

const HomeContent = () => {
  return (
    <main>
      <section className={styles.container} aria-label="Blog Posts">
        <Card>
          <H2>Blog Post 1</H2>
          {[1, 2, 3].map(item => (
            <div key={item}>{item}</div>
          ))}
        </Card>
      </section>
    </main>
  )
}

export default HomeContent
