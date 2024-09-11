import {
  getAllPostIds,
  getPostData,
  PostData,
  PostParams,
  PostProps,
} from '@/lib/posts'
import { CustomMDX } from '@/components/CustomMDX'
import React from 'react'

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
  const { title, date, content }: PostData = await getPostData(
    params.id,
    params.locale,
  )
  return (
    <>
      <h1>{title}</h1>
      <time dateTime={date}>{date}</time>
      <article className={'prose'}>
        <CustomMDX source={content!} components={{}} />
      </article>
    </>
  )
}

export default Post
