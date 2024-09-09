import NavBar from '@/components/NavBar'
import ThemeRegistry from '@/app/theme'

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
        <main>
          <ThemeRegistry>
            <NavBar />
            {children}
          </ThemeRegistry>
        </main>
      </body>
    </html>
  )
}
