import React from "react"
import Head from "next/head"
import Post from "../../components/Post"

function posts({ posts, users }) {
  return (
    <div className="px-5 py-5">
      <Head>
        <title>nxt</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts.slice(0, 80).map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          userId={post.userId}
          users={users}
        />
        //<Post key={post.id} post={post} />
      ))}
    </div>
  )
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()
  const res2 = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res2.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      users,
    },
  }
}

export default posts
