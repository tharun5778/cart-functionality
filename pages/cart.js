import CartScreen from '../component/castscreen';

export default function Cart({cartItems}) {
    return (
      <div>
          {/* {posts.map((i, index)=>{
                return (
                    <div key={index }>
                        <a>
                            <h1> {i.productName} </h1>
                            <h2>{i.quantity}</h2>
                        </a>
                        <button onClick={()=>this.remove()}>
                            add
                        </button>
                    </div>
              )
            })
          } */}
          <CartScreen cartProducts = {cartItems} />

      </div>
    )
  }
  
  
  export async function getStaticProps() {
  
    const res = await fetch('http://localhost:4000/cartItems')
    const cartItems = await res.json()
  
    return {
      props: {
        cartItems,
      },
    }
  }