// ✍️ import Head from 'next/head'
import Head from 'next/head';
import { ChakraProvider, Heading } from '@chakra-ui/react'


const Home = () => {
  return (
    <ChakraProvider>
      {/* ✍️ add title and description using the Head component */}
      <Head>
        <title>My Next.js Course</title>
        <meta 
          name="description"
          content='An egghead.io course on how to get started with Next.js'
        />
      </Head>
      <Heading width="full" textAlign="center">This is our homepage content!</Heading>
    </ChakraProvider>
  )
}
export default Home
