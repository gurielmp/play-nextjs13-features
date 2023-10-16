"use client"
import { useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0)
  return (
    <div>
      {/* <h1>ini state di template {state}</h1>
      <button
        className="bg-blue-300 py-1 px-4 rounded-md ml-2 mb-2"
        onClick={() => setState(state + 1)}
      >
        +
      </button>
      <br />
      <button
        className="bg-blue-300 py-1 px-4 rounded-md ml-2 mb-2"
        onClick={() => setState(0)}
      >
        reset
      </button> */}
      <div>{children}</div>
    </div>
  )
}
