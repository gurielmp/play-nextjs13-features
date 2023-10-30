"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  console.log(session)
  console.log(status)
  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/login")
    }
  }, [router, status])
  return (
    <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1>Dashboard</h1>
    </div>
  )
}
