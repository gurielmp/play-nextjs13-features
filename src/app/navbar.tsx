import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Navbar() {
  const pathName = usePathname()
  const router = useRouter()
  const { status }: { status: string } = useSession()
  return (
    <nav className="flex bg-gray-800 py-4 px-5 justify-between">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-4 ${
                pathName === "/" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-4 ${
                pathName === "/about" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-4 ${
                pathName === "/about/profile" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <button
            className="bg-white px-3 py-1 rounded-md cursor-pointer text-sm"
            onClick={() => signOut()}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-white px-3 py-1 rounded-md cursor-pointer text-sm"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  )
}
