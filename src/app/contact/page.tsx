'use client'
import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import TelegramIcon from '@mui/icons-material/Telegram'
import WordCloud from 'react-wordcloud'

const words = [
  { text: 'NodeJS', value: 120 },
  { text: 'React', value: 100 },
  { text: 'Postgres', value: 80 },
  { text: 'Java', value: 80 },
  { text: 'AWS', value: 80 },
  { text: 'Algorithm', value: 70 },
  { text: 'Data structure', value: 70 },
  { text: 'Redis', value: 70 },
  { text: 'TypeScript', value: 60 },
  { text: 'Intellij', value: 50 },
  { text: 'NextJS', value: 50 },
  { text: 'MUI', value: 40 },
  { text: 'Figma', value: 40 },
  { text: 'Solidity', value: 40 },
  { text: 'Terminal', value: 30 },
  { text: 'Git', value: 30 },
  { text: 'Vim', value: 30 },
]

const WordCloudComponent = () => {
  return (
    <Box>
      <WordCloud
        words={words}
        options={{
          colors: [
            '#FF5733', // 红色
            '#FF8C00', // 橙色
            '#FFD700', // 黄色
            '#4CAF50', // 绿色
            '#00BCD4', // 青色
            '#2196F3', // 蓝色
            '#9C27B0', // 紫色
            '#E91E63', // 粉色
            '#9E9E9E', // 灰色
            '#795548', // 棕色
            '#FF4500', // 橙红色
            '#DA70D6', // 中紫色
            '#ADFF2F', // 绿色黄色
            '#7FFF00', // 查特酒绿色
            '#D2691E', // 巧克力色
            '#FF6347', // 番茄色
            '#4682B4', // 钢蓝色
            '#32CD32', // 石灰绿色
            '#8A2BE2', // 蓝紫色
            '#FF1493', // 深粉色
            '#00FA9A', // 中春绿色
          ],
          fontSizes: [30, 80],
          padding: 5,
          enableTooltip: false,
          rotationAngles: [-20, 20],
          rotations: 8,
        }}
      />
    </Box>
  )
}

export default function ContactPage() {
  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <Avatar
              src="/placeholder.svg?height=120&width=120"
              alt="陈明"
              sx={{ width: 120, height: 120, mb: 2 }}
            />
            <Typography variant="h4" component="h1" gutterBottom>
              梁鸿
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              全栈开发工程师
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1" color="text.secondary">
              热衷于创建优雅的用户界面和高效的后端系统。
            </Typography>
            <Typography variant="body1" color="text.secondary">
              擅长 React、Node.js、Java 和AWS。
            </Typography>
            <Typography variant="body1" color="text.secondary">
              喜欢探索新技术，并乐于分享知识。
            </Typography>
          </Box>
          <WordCloudComponent />

          <List>
            <ListItem>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="GitHub" secondary="github.com/chenming" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText
                primary="LinkedIn"
                secondary="https://www.linkedin.com/in/alfred-liang-6b2648125/"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText
                primary="Email"
                secondary="lianghongbuaa@gmail.com"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TelegramIcon />
              </ListItemIcon>
              <ListItemText primary="Telegram" secondary="@alfred_liang" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  )
}
