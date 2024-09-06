import { CssBaseline } from '@mui/material'

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
    // 添加 CssBaseline 组件

    <html lang="en">
      <body>
        <main>
          <CssBaseline />
          {children}
        </main>
      </body>
    </html>
  )
}
