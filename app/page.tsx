// app/page.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">原神攻略网站</h1>
      <p className="text-xl mb-8 text-gray-600">🚧 网站建设中，敬请期待...</p>
      <Link
        href="/characters"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        查看角色图鉴
      </Link>
    </main>
  )
}
