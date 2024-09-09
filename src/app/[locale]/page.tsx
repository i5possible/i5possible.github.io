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

const blogPosts = [
  {
    id: 1,
    title: '5G技术如何改变我们的生活',
    date: '2023-06-15',
    summary:
      '5G技术正在迅速改变我们的生活方式。从超快的网络速度到物联网的广泛应用,本文探讨了5G技术带来的革命性变化。',
    slug: '5g-technology-changing-lives',
  },
  {
    id: 2,
    title: '人工智能在医疗领域的应用',
    date: '2023-06-10',
    summary:
      '人工智能正在医疗领域掀起一场革命。从诊断辅助到个性化治疗,AI技术正在帮助医生提供更精准、更高效的医疗服务。',
    slug: 'ai-in-healthcare',
  },
  {
    id: 3,
    title: '可持续发展:企业的新挑战与机遇',
    date: '2023-06-05',
    summary:
      '在全球气候变化的背景下,可持续发展已成为企业面临的重要课题。本文分析了企业在实现可持续发展过程中的挑战和机遇。',
    slug: 'sustainable-development-challenges-opportunities',
  },
  {
    id: 4,
    title: '区块链技术:超越加密货币',
    date: '2023-05-30',
    summary:
      '区块链技术的应用远不止于加密货币。从供应链管理到数字身份验证,本文探讨了区块链技术在各个领域的创新应用。',
    slug: 'blockchain-beyond-cryptocurrency',
  },
  {
    id: 5,
    title: '远程工作的未来:挑战与策略',
    date: '2023-05-25',
    summary:
      '随着远程工作成为新常态,企业和员工都面临着新的挑战。本文讨论了如何有效管理远程团队,以及保持工作效率和团队凝聚力的策略。',
    slug: 'future-of-remote-work',
  },
  {
    id: 6,
    title: '数据隐私:在便利与安全之间寻找平衡',
    date: '2023-05-20',
    summary:
      '在数字时代,数据隐私成为一个越来越重要的话题。本文探讨了个人数据保护的重要性,以及如何在技术便利和隐私保护之间找到平衡。',
    slug: 'data-privacy-balancing-convenience-and-security',
  },
]

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
                  发布日期: {post.date}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.expert}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/blog/${post.id}`} passHref>
                  <Button size="small" color="primary">
                    阅读更多
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
