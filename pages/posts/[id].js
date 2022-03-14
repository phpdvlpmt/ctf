import React from "react"
import Head from "next/head"

function Post({ post }) {
  return (
    <div className="space-y-4  px-10">
      <Head>
        <title>nxt</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className=" text-lg font-bold text-amber-500 font-display">
        {post.title}
      </h1>
      <div className=" text-gray-700 font-body">{post.body}</div>
    </div>
  )
}
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post
