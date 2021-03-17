import { useRouter } from 'next/router'

export default function Header() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  )
}

const Link = ({ children, href }) => {
    console.log(children)
    console.log(href)
  const router = useRouter()
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href)
      }}
    >
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
    </a>
  )
}

// const AboutPage = () => <p>This is about Next.js!</p>

// export async function getServerSideProps() {
//   await new Promise((resolve) => {
//     setTimeout(resolve, 500)
//   })
//   return { props: {} }
// }

// export default AboutPage

