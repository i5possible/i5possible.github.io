import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export type PostData = {
  id: string
  title: string
  date: string
  contentHtml?: string
}

export type PostProps = {
  params: {
    id: string
  }
}

const getSortedPostsData = (locale: string): PostData[] => {
  const dirPath = path.join(postsDirectory, locale)
  const fileNames = fs.readdirSync(dirPath)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '') // 去掉文件扩展名

    const fullPath = path.join(dirPath, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    }
  })

  return allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

const getAllPostIds = (locale: string): PostProps[] => {
  const dirPath = path.join(postsDirectory, locale)
  const fileNames = fs.readdirSync(dirPath)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
        locale,
      },
    }
  })
}

// 获取单个博客文章的数据
const getPostData = async (id: string, locale: string): Promise<PostData> => {
  const fullPath = path.join(postsDirectory, locale, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  }
}

export { getSortedPostsData, getAllPostIds, getPostData }
