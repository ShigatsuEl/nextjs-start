import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/posts'

export default function Post() {
  return <Layout home={false}>...</Layout>
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}
