"use client"

import { useState } from "react"

export default function AdminProductPage() {
  const [status, setStatus] = useState("")
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=product&secret=12345678",
      {
        method: "POST",
      }
    )
    if (!res.ok) {
      setStatus("Revalidate Failed")
    } else {
      const response = await res.json()
      if (response.revalidate) {
        setStatus("Revalidate Success")
      }
    }
  }

  return (
    <div>
      <h1>{status}</h1>
      <button
        className="bg-slate-800 hover:bg-slate-600 m-5 text-white font-bold py-2 px-4 rounded"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  )
}
