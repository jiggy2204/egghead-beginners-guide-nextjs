// ✍️ import the Image component from 'next/image'
import Image from 'next/image';
// ✍️ import "lazar.png" statically
import lazar from '../lazar.png';

const JIGGY_ART = 'https://jiggyartcom.files.wordpress.com/2023/01/valkyrie_red_web.jpg?strip=info&w=2000'

const Home = () => {
  return (
    /* ✍️ add the lazar image here */
    <>
    {/**
     * First IMAGE - Next js auto determines w and h based on imported file (see above)
     * Second IMAGE - url import; w and h do not determine rendered size, but are used to infer the correct aspect ratio
     */}
      <Image src={lazar} alt="pic of Lazar" />
      <Image
        src={JIGGY_ART}
        alt="Remote pic of lazar"
        width={250}
        height={450}
        />
    </>
  )

  
}

export default Home
