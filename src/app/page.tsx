import { redirect } from 'next/navigation'

export default function RootPage() {
  redirect('/zh')
  return null
}