import {
  getAllPostIds,
  getPostData,
  PostData,
  PostParams,
  PostProps,
} from '@/lib/posts'
import { notFound } from 'next/navigation'

export function generateStaticParams(): PostParams[] {
  const locales = ['en', 'zh'] // 定义支持的语言列表
  const allParams: PostParams[] = []
  for (const locale of locales) {
    const postIds = getAllPostIds(locale)
    const localeParams = postIds.map((post) => ({
      locale,
      id: post.params.id,
    }))
    allParams.push(...localeParams)
  }

  return allParams
}

const Post = async ({ params }: PostProps) => {
  const postData: PostData = await getPostData(params.id, params.locale)

  if (!postData) {
    notFound()
  }

  return (
    <div>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
    </div>
  )
}
export default Post
