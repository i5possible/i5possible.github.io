import React from 'react'
import { getSortedPostsData, PostData } from '@/lib/posts'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid2,
  Typography,
} from '@mui/material'
import Link from 'next/link'

interface LocalePageProps {
  params: {
    locale: string
  }
}

const translations: Record<string, Record<string, string>> = {
  en: {
    title: 'Blog Posts',
    publishedDate: 'Published Date',
    readMore: 'Read More',
  },
  zh: {
    title: '博客文章',
    publishedDate: '发布日期',
    readMore: '阅读更多',
  },
}

const BlogListPage: React.FC<LocalePageProps> = ({
  params,
}: LocalePageProps) => {
  const blogPosts: PostData[] = getSortedPostsData(params.locale)

  return (
    <Container
      maxWidth="md"
      sx={{
        m: 'auto',
        py: 8,
      }}
    >
      <Grid2 container spacing={4}>
        {blogPosts.map((post) => (
          <Grid2
            xs={12}
            md={6}
            key={post.id}
            sx={{
              width: '100%',
            }}
          >
            <Card
              sx={{
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: 6, // or you can use a custom shadow like '0px 4px 20px rgba(0, 0, 0, 0.1)'
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {post.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {translations[params.locale]['publishedDate']}: {post.date}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.excerpt}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/posts/${params.locale}/${post.id}`} passHref>
                  <Button size="small" color="primary">
                    {translations[params.locale]['readMore']}
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  )
}

export async function generateStaticParams() {
  const locales = ['en', 'zh']
  return locales.map((locale) => ({ locale }))
}

export default BlogListPage
