import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export type PostData = {
  id: string
  title: string
  date: string
  excerpt?: string
  content?: string
}

export type PostParams = {
  id: string
  locale: string
}

export type PostProps = {
  params: PostParams
}

const getSortedPostsData = (locale: string): PostData[] => {
  const dirPath = path.join(postsDirectory, locale)
  const fileNames = fs.readdirSync(dirPath)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '') // 去掉文件扩展名

    const fullPath = path.join(dirPath, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as { date: string; title: string; expert: string }),
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
        id: fileName.replace(/\.mdx$/, ''),
        locale,
      },
    }
  })
}

const getPostData = async (id: string, locale: string): Promise<PostData> => {
  const filePath = path.join(postsDirectory, locale, `${id}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')

  const { content, data, excerpt } = matter(fileContent)

  return {
    id,
    content,
    ...(data as { date: string; title: string; excerpt: string }),
  }
}

export { getSortedPostsData, getAllPostIds, getPostData }
