import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello</h1>
      <Link
        href="/product"
        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Go to product page
      </Link>
    </main>
  )
}
