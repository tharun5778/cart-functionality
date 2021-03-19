// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'

export default function Home({posts}) {
  return (
    <div>
      {/* <div>
        <nav class="navbar fixed-top navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
          </div>
        </nav>
      </div> */}
      <div class="container" style={{backgroundColor:'#edebeb', height: '100vh', marginTop: '50px'}}>
      <div class="row row-cols-1 row-cols-md-3">
        
          {posts.map((i, index)=>{
                return (
                  <div class="row sm-body rounded" key={index} style={{marginTop: '15px'}}>
                    <Link href={'/products/'+ i.productName}>
                      <div style={{fontSize:'15px', cursor:'pointer'}}>
                      <div style={{backgroundColor:'#fcfcfc', borderRadius: '5px'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                          <Image
                            src="data:image/jpeg;base64,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"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                          />
                        </div>
                        <div style={{marginLeft:'5px'}}>
                          <p> {i.productName} </p>
                          <p> {i.description} </p>
                          <p>price : {i.price}</p>
                        </div>
                      </div>
                        
                      </div>
                    </Link>
                  </div>
                  // </div>
              )
            })
          }
       
      </div>
    </div>
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
