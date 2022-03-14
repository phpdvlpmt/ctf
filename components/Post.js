import React from "react"
import Link from "next/link"
import { UserIcon, AtSymbolIcon } from "@heroicons/react/outline"

export default function Post({ title, body, id, users, userId }) {
  const user = users.filter((user) => user.id === userId)

  return (
    <div className="space-y-4 mb-3 border p-2 rounded-lg">
      <h1 className=" text-lg font-bold text-amber-500 font-display">
        {title}
      </h1>

      <div className="flex items-center space-x-3">
        <UserIcon className="h-5 w-5 text-emerald-500" />
        <div>{user.map((user) => user.name)}</div>
        <AtSymbolIcon className="h-5 w-5 text-emerald-500" />
        <div>{user.map((user) => user.email)}</div>
      </div>
      <div className=" text-gray-700 font-body">{body}</div>
      <Link href={`/posts/${id}`}>
        <a className=" text-sm inline-block transition-all delay-150 bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700">
          Read more
        </a>
      </Link>
    </div>
  )
}
