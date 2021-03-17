export const getStaticPaths = async () =>{
    const res = await fetch('http://18.221.177.41:8080/api/getListings');
    const data = await res.json();
    console.log(data);

    const paths = data.data.map((product) =>{
        return {
            params: { id: product.listing_id.toString() }
        }
    })
    console.log("hello")
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://18.221.177.41:8080/api/getListings/'+id);
    const data = await res.json();

    return {
        props:{
            data:data.data,
        }
    }
}

const Details = ({data})=>{
    return(
        <div>
            <h1>{data.category}</h1>
            <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">{data.username}</h2>
        </div>
    )
}

export default Details