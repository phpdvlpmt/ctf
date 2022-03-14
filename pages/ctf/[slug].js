import React from "react"
import Image from "next/image"
import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function FourHistoryDetails({ pokus }) {
  return (
    <div>
      <div>
        <h2 className=" text-xl text-orange-600 font-display">
          {pokus.fields.title}
        </h2>
      </div>
      <div>
        <Image
          src={"https:" + pokus.fields.image.fields.file.url}
          width={pokus.fields.image.fields.file.details.image.width}
          height={pokus.fields.image.fields.file.details.image.height}
          alt="ok"
        />
      </div>
    </div>
  )
}
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "fourHistory",
    "fields.slug": params.slug,
  })

  return {
    props: {
      pokus: items[0],
      revalidate: 1,
    },
  }
}
export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "fourHistory",
  })
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
// This also gets called at build time

export default FourHistoryDetails
