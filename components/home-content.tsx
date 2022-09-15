import Card from './card'
import H2 from './h2'
import GridTemplate from './grid-template'
import styles from '../styles/home-content.module.css'

const HomeContent = () => {
  return (
    <main>
      <section className={styles.container} aria-label="Blog Posts">
        <GridTemplate gridMinColumn="15rem" gridGap="1rem" gridRepeat="auto-fill">
          {[1, 2, 3].map(item => (
            <Card key={item}>
              <H2>Blog {item}</H2>
            </Card>
          ))}
        </GridTemplate>
      </section>
    </main>
  )
}

export default HomeContent
