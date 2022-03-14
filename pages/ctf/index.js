import React from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function ctf({ pokus }) {
  console.log(pokus)
  //const { thumbnail } = pokus.fields
  return (
    <div className="p-5 text-gray-900  sm:grid sm:grid-cols-2 gap-10 md:grid md:grid-cols-3">
      <Head>
        <title>nxt</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {pokus.map((pok) => (
        <div key={pok.sys.id} className="bg-white rounded p-10 shadow-md">
          <h2 className=" text-xl text-orange-600 font-display">
            <Link href={"/ctf/" + pok.fields.slug} passHref>
              <a> {pok.fields.title}</a>
            </Link>
          </h2>
          <div>
            <Image
              src={"https:" + pok.fields.image.fields.file.url}
              width={pok.fields.image.fields.file.details.image.width}
              height={pok.fields.image.fields.file.details.image.height}
              alt="ok"
            />
          </div>
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
