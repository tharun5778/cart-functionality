// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home({posts}) {
  return (
    <div>
        {posts.map((i)=>{
              return (
                <Link href={'/products/'+ i.productName}>
                  <a>
                    <h1> {i.productName} </h1>
                  </a>
                </Link>
            )
          })
        }
    </div>
  )
}


export async function getStaticProps() {

  const res = await fetch('http://localhost:4000/products')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
