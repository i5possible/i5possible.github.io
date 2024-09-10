import '@/styles/global.css'

export const metadata = {
  title: 'i5possible',
  description: `i5possible's blog`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
