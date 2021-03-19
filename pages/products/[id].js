import { useRouter } from 'next/router';
import Link from 'next/link';
import Home from '../../component/home';

export const getStaticPaths = async () =>{
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();

    const paths = data.map((product) =>{
        return {
            params: { id: product.productName.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    // console.log(context)
    const id = context.params.id;
    // console.log(id)
    const res = await fetch('http://localhost:4000/products/'+ id);
    const cart = await fetch('http://localhost:4000/cartItems');
    const data = await res.json();
    const cartData = await cart.json();

    return {
        props:{
            data:data,
            cartData:cartData
        }
    }
}

const Details = ({data, cartData})=>{
    const router = useRouter()
    // console.log(data)
    // var a = 5;
    return(
        <div>
            <Home item={data} cartData={cartData} />
        </div>
    )
}

export default Details