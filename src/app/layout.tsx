import React from 'react'
import NavBar from '@/components/NavBar'
import ThemeRegistry from '@/app/theme'
import { Box } from '@mui/material'
import '@/styles/global.css'
import CssBaseline from '@mui/material/CssBaseline'

export const metadata = {
  title: 'i5possible',
  description: `i5possible's blog`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Box
          sx={{
            width: '100%',
            position: 'fixed',
            height: '100vh',
            display: 'block',
            backgroundImage: `url(/assets/background-home.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', // 背景图片居中
            zIndex: -100,
            '::before': {
              content: '""',
              position: 'absolute', // 绝对定位
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(256, 256, 256, 0.3)',
              zIndex: -99, // 确保覆盖层在背景图之上
            },
          }}
        />

        <ThemeRegistry>
          <NavBar />
          <Box
            sx={{
              marginTop: 8,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
