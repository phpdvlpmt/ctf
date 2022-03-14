import Head from "next/head"
import Users from "../users.json"

export default function Home() {
  return (
    <div className="px-10 py-4">
      <Head>
        <title>nxt</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className=" text-7xl text-emerald-500 font-extralight font-display">
        Next App
      </h1>
      {Users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  )
}
