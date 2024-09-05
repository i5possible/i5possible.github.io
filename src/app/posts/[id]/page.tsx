import { getAllPostIds, getPostData, PostData } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths.map((path) => ({ id: path.params.id }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData: PostData = await getPostData(params.id)

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
