"use client"
import { useRouter } from "next/navigation"
import { useRef, ReactNode, MouseEventHandler } from "react"

export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef(null)
  const router = useRouter()

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back()
    }
  }
  return (
    <div
      ref={overlay}
      onClick={close}
      className="fixed z-10 left-0 top-0 right-0 bottom-0 mx-auto bg-black/60"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg">
        {children}
      </div>
    </div>
  )
}
