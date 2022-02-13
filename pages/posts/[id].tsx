import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData, PostsData } from '../../lib/posts'

interface PostProps {
  postData: PostsData
}
interface IParams extends ParsedUrlQuery {
  id: string
}

export default function Post({ postData }: PostProps) {
  return (
    <Layout home={false}>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // 모든 경로를 담은 배열을 내보낸다. 단지 string을 경로로 보내는 것이 아님을 주의
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams
  const postData = await getPostData(id)
  return {
    props: {
      postData,
    },
  }
}
