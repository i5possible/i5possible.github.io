import Link from 'next/link'

export default function Hello() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Link href="/world">Go to world</Link>
    </div>
  )
}
