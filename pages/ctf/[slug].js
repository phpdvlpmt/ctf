import React from "react"
import Head from "next/head"
import Image from "next/image"
import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function FourHistoryDetails({ pokus }) {
  return (
    <div className=" p-10 ">
      <Head>
        <title>nxt</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" max-w-2xl mx-auto  text-gray-800 bg-white rounded p-10 space-y-3 shadow-md">
        <div className="">
          <h2 className="text-xl text-orange-600 font-display">
            {pokus.fields.title}
          </h2>
        </div>
        <div>
          {pokus.fields.image && (
            <Image
              src={"https:" + pokus.fields.image.fields.file.url}
              width={pokus.fields.image.fields.file.details.image.width}
              height={pokus.fields.image.fields.file.details.image.height}
              alt="ok"
            />
          )}
        </div>
        <div className="text-gray-800 font-body">
          {documentToReactComponents(pokus.fields.body)}
        </div>
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
