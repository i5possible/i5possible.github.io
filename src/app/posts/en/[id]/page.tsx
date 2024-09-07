import { getAllPostIds, getPostData, PostData, PostProps } from '@/lib/posts'
import { notFound } from 'next/navigation'

const locale = 'en'

export const generateStaticParams = async (): Promise<PostProps[]> => {
  return getAllPostIds(locale)
}

const Post = async ({ params }: PostProps) => {
  const postData: PostData = await getPostData(params.id, locale)

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
