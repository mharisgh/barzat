'use client'
import Image from 'next/image'
import { client, urlFor } from '../lib/sanity';
import { motion, useTransform, useViewportScroll } from "framer-motion"

// async function getData() {
//   const query = "*[_type == 'heroImages']"

//   const data = await client.fetch(query)

//   return data;

// }

export const Hero = () => {
  // const data = await getData()

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1.9]);


  return (
    <section className='bg-green-700 h-screen relative mx-auto'>

      {/* bg video */}
      <video className='w-full h-full transform object-cover absolute z-[2]' src="hero-video.mp4" muted autoPlay loop></video>

      {/* overlay */}
      <div className='w-full h-full bg-gradient-to-b from-black/50 to-transparent absolute z-[3]'>
      </div>

      {/* texts & cta */}
      <div className="w-full absolute  h-full z-[4]">
        <div className='lg:max-w-7xl mx-auto  h-full flex items-center '>
          <div className='  flex flex-col gap-10'>
            <h1 className='text-6xl text-white font-semibold'>Discover New <br></br>Destination</h1>
            <p className='text-white text-lg '>Embark on Unforgettable Journeys <br></br> Where Every Destination Tells a Unique Story.</p>
            <button className='uppercase bg-[#faee38] py-4 rounded-lg w-fit px-8 font-bold'>Discover now</button>
          </div>
        </div>
      </div>

      {/* cloud */}
      <motion.div className='absolute z-[5]  '
        style={{ scale }}
        initial={{ x: -150 }}
        animate={{ x: 0, }}
        transition={{ duration: 5, repeat: Infinity }}
        whileInView={{x:0}}
      >
        <motion.img
          style={{
            translate: scrollYProgress
          }}
          src="/cloud.webp"
          className=''
          alt="cloud" />
      </motion.div>


    </section>
  )
}
