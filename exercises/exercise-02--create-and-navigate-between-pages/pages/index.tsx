// ✍️ import the Link component from 'next/link'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      {/* ✍️ put a link to the About page */}
      {/*Using <a> will have a page reload, Link keeps it front-end based*/}
      <Link href={"/about"}>About</Link>
    </div>
  )
}

export default Home
