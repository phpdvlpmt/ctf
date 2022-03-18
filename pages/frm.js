import React, { useState } from "react"
import Users from "../users.json"

function Frm() {
  const [count, setCount] = useState()
  const [user, setUser] = useState([])

  const handleChange = (event) => {
    event.target.value.length > 2 ? setCount(event.target.value) : ""
    //setUser(Users.filter((user) => user.username === count))
  }

  return (
    <div className="p-4">
      <div>{count}</div>

      <div>
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Jane Doe"
              aria-label="Full name"
              onChange={handleChange}
            />

            <button
              onClick={(e) => setVal(() => "")}
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div>
        <div>
          {Users &&
            Users.filter((user) => user.username.startsWith(count)).map(
              (user) => (
                <div key={user.id}>
                  {user.email}
                  {console.log(user)}
                </div>
              )
            )}
        </div>
      </div>
    </div>
  )
}

export default Frm
