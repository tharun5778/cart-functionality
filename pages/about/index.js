import Home from "../../component/home"
import { useRouter } from 'next/router'
function About({posts}) {
  const router = useRouter()
    return (
      <div>
        <Home  posts={posts}/>
        <span onClick={() => router.replace('/activelink')}>Click here to reload</span>
      </div>
    )
  }
  
  export default About


export async function getStaticProps() {

    const res = await fetch('http://18.221.177.41:8080/api/getListings')
    const posts = await res.json()
    console.log(posts)

    return {
      props: {
        posts,
      },
    }
  }
