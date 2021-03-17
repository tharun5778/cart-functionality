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
    const data = await res.json();

    return {
        props:{
            data:data,
        }
    }
}

const handleclick= async (a)=>{
    // const router = useRouter()
    var ba = a+10;
    const res = await fetch('http://localhost:4000/cartItems');
    console.log(ba + res);
    // router.push('/cart')
}

const Details = ({data})=>{
    const router = useRouter()
    // console.log(data)
    // var a = 5;
    return(
        // <div>
        //     <h1>{data[0].productName}</h1>
        //     <h2>{data[0].description}</h2>
        //     <Link href={'/cart'}>
        //     <button onClick={handleclick(a)}>
        //          Activate Lasers
        //     </button>
        //     </Link>
        //     <span onClick={() => router.push('/cart')}>Cart Screen</span>
        // </div>
        <div>
            <Home item={data}/>
        </div>
    )
}

export default Details