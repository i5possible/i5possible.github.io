import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import Link from 'next/link'

export default async function Home() {
  let allPostsData = await getSortedPostsData()

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
