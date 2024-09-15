import React from 'react'
import { Box, Container } from '@mui/material'
import ImageTextSection from '../../components/ImageTextSection'

const sections = [
  {
    imageSrc: 'assets/life.png',
    title: '热爱生活',
    description: [
      '生命是一段单向的旅程，体验是我们所有的财富',
      '捕捉生活中的美好片刻，感受日常中的点滴幸福',
      '一次漫无目的的旅行，一杯热气腾腾的香茗，一㫾悠闲自在的阅读，都是对生活热爱的表达',
      '喧嚣的城市，匆忙的脚步，密集的日程，也依然需要在忙碌中寻找内心的平静与满足',
    ],
    imageOnLeft: true,
    isDark: false,
  },
  {
    imageSrc: 'assets/learning.webp',
    title: '终身学习',
    description: [
      '书不可以一日不读，路不可以一日不行',
      '和高人聊，从书中学，在事上练',
      '唯一不变的就是变化，不进则退，不学则废',
    ],
    imageOnLeft: false,
    isDark: true,
  },
  {
    imageSrc: 'assets/tech.webp',
    title: '技术卓越',
    description: [
      '没有银弹，只有适合',
      '抽象的看待问题，具体的解决问题',
      '技术是手段，业务是目的',
    ],
    imageOnLeft: true,
    isDark: false,
  },
  {
    imageSrc: 'assets/sharing.webp',
    title: '持续分享',
    description:
      '作为一家国际化企业,我们拥有全球视野和本地洞察。我们的团队遍布世界各地,为不同市场提供量身定制的产品和服务。',
    imageOnLeft: false,
    isDark: true,
  },
  {
    imageSrc: 'assets/return.png',
    title: '回馈社会',
    description:
      '人才是我们最宝贵的资产。我们致力于创造一个激发创意、鼓励成长的工作环境,帮助每一位员工充分发挥潜力,实现职业理想。',
    imageOnLeft: true,
    isDark: false,
  },
]

const HomePage: React.FC = () => {
  return (
    <Container>
      {/*<Box*/}
      {/*  sx={{ backgroundColor: 'primary.main', color: 'common.white', py: 8 }}*/}
      {/*>*/}
      {/*<Container maxWidth="md">*/}
      {/*<Typography variant="h2" align="center" gutterBottom>*/}
      {/*  欢迎来到我们的世界*/}
      {/*</Typography>*/}
      {/*<Typography variant="h5" align="center">*/}
      {/*  探索创新,引领未来*/}
      {/*</Typography>*/}
      {/*</Container>*/}
      {/*</Box>*/}
      {sections.map((section, index) => (
        <ImageTextSection key={index} {...section} />
      ))}
    </Container>
  )
}

export default HomePage
