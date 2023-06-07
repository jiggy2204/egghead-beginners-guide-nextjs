import { useRouter } from 'next/router'

//folders can also be dynamic (see list),
//with nested dynamic pages
const Comment = () => {
 const router = useRouter();

 console.log(router.query)

 return <p>Hello </p>
}

export default Comment