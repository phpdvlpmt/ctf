import React from "react"
import Link from "next/link"
import { WifiIcon } from "@heroicons/react/outline"

export default function Header() {
  return (
    <header className="px-5 py-4 bg-slate-800 text-white">
      <nav className="flex items-center space-x-3">
        <WifiIcon className="h-5 w-5 text-emerald-500" />
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
    </header>
  )
}
