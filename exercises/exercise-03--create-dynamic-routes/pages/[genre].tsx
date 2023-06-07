import { useRouter } from 'next/router'

//Dynamic page is wrapped in brackets (see page list)
const Genre = () => {
 const router = useRouter();

 const { genre } = router.query;

 return <h1>{genre}</h1>
}

export default Genre;