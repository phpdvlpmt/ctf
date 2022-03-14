import React from "react"
import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function ctf({ pokus }) {
  console.log(pokus)
  return (
    <div>
      {pokus.map((pok) => (
        <div key={pok.sys.id}>
          <h2 className=" text-xl text-orange-600 font-display">
            {pok.fields.title}
          </h2>
          <div className="text-gray-800 font-body">
            {documentToReactComponents(pok.fields.body)}
          </div>
        </div>
      ))}
    </div>
  )
}
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: "fourHistory" })

  return {
    props: {
      pokus: res.items,
      revalidate: 1,
    },
  }
}

export default ctf
