import React, { useState } from "react"

function Useetaeex({ usr }) {
  const [count, setCount] = useState("ok")
  //boolean
  const ok = () => (count == "ok" ? setCount("zzz") : setCount("ok"))

  return (
    <div>
      {count}

      <button className="bg-orange-300 p-3" onClick={ok}>
        Change variable
      </button>
      {usr.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  )
}

//script
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const usr = await res.json()
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { usr },
  }
}
export default Useetaeex
