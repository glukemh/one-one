import fs from 'fs'
import path from 'path'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import extractMetadata from '../../utils/extractMarkdownMetadata'

interface GetStaticPropsInput {
  params: {
    slug: string
  }
}

interface BlogPostProps {
  markdown: string
  metadata: Record<string, string>
}

const BlogPost = ({ markdown, metadata }: BlogPostProps) => {
  return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
}

export default BlogPost

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(fileName => {
    const slug = fileName.replace('.md', '')

    if (fs.existsSync(path.join('pages', 'blog', `${slug}.tsx`)))
      throw new Error(`Duplicate post ${slug} exists in both /posts and /pages/blog`)

    return {
      params: {
        slug: fileName.replace('.md', ''),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }: GetStaticPropsInput): Promise<{ props: BlogPostProps }> => {
  const file = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8')
  return {
    props: {
      ...extractMetadata(file),
    },
  }
}
