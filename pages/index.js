// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home(posts) {
  return (
    <div>
      <Home  posts={posts}/>
    </div>
  )
}


export async function getStaticProps() {

  const res = await fetch('http://localhost:4000/products')
  const posts = await res.json()
  console.log(posts)

  return {
    props: {
      posts,
    },
  }
}
