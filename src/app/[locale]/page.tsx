// src/app/[locale]/page.tsx
import { getSortedPostsData, PostData } from '@/lib/posts'

interface LocalePageProps {
  params: {
    locale: string
  }
}

const Home = async ({ params }: LocalePageProps) => {
  const { locale } = params
  const allPostsData: PostData[] = getSortedPostsData(locale)

  return (
    <div>
      <h1>{locale === 'en' ? 'Welcome to My Blog' : '欢迎来到我的博客'}</h1>
      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <a href={`/${locale}/${id}`}>{title}</a>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
      <div>
        <a href="/en">English</a> | <a href="/zh">中文</a>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const locales = ['en', 'zh']
  return locales.map((locale) => ({ locale }))
}

export default Home
