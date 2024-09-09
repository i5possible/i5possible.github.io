import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import ImageTextSection from '../../components/ImageTextSection'

const sections = [
  {
    imageSrc: '/placeholder.svg?height=400&width=600',
    title: '创新科技',
    description:
      '我们致力于推动技术创新,为未来开创无限可能。通过不断探索和突破,我们正在重塑行业标准,引领科技发展的新方向。',
    imageOnLeft: true,
    isDark: false,
  },
  {
    imageSrc: '/placeholder.svg?height=400&width=600',
    title: '可持续发展',
    description:
      '我们深知环境保护的重要性,积极推动可持续发展战略。通过创新技术和负责任的商业实践,我们正在为建设更美好的世界贡献力量。',
    imageOnLeft: false,
    isDark: true,
  },
  {
    imageSrc: '/placeholder.svg?height=400&width=600',
    title: '客户至上',
    description:
      '客户的满意是我们永恒的追求。我们倾听每一位客户的需求,提供个性化的解决方案,确保为客户创造最大价值。',
    imageOnLeft: true,
    isDark: false,
  },
  {
    imageSrc: '/placeholder.svg?height=400&width=600',
    title: '全球视野',
    description:
      '作为一家国际化企业,我们拥有全球视野和本地洞察。我们的团队遍布世界各地,为不同市场提供量身定制的产品和服务。',
    imageOnLeft: false,
    isDark: true,
  },
  {
    imageSrc: '/placeholder.svg?height=400&width=600',
    title: '人才培养',
    description:
      '人才是我们最宝贵的资产。我们致力于创造一个激发创意、鼓励成长的工作环境,帮助每一位员工充分发挥潜力,实现职业理想。',
    imageOnLeft: true,
    isDark: false,
  },
  {
    imageSrc: '/placeholder.svg?height=400&width=600',
    title: '社会责任',
    description:
      '我们深知企业肩负的社会责任,积极参与公益事业,支持教育和环保项目。通过实际行动,我们正在为创造一个更加公平、可持续的社会贡献力量。',
    imageOnLeft: false,
    isDark: true,
  },
]

const HomePage: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{ backgroundColor: 'primary.main', color: 'common.white', py: 8 }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            欢迎来到我们的世界
          </Typography>
          <Typography variant="h5" align="center">
            探索创新,引领未来
          </Typography>
        </Container>
      </Box>
      {sections.map((section, index) => (
        <ImageTextSection key={index} {...section} />
      ))}
    </Box>
  )
}

export default HomePage
