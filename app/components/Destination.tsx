// 'use client'
import React from 'react'
import { client } from '../lib/sanity'
import { simplifiedPackage } from '../interface';
import Link from 'next/link';
import { motion } from 'framer-motion'

async function getData() {
  const query = `*[_type == "destination"][0...6] | order(_createdAt desc)
  {
    _id,
    "slug": slug.current,
    "destinationName": name,
    "imageUrl" : destinationImg.asset->url
}`

  const data = await client.fetch(query)
  return data;
}

async function Destination() {
  const data: simplifiedPackage[] = await getData()
  console.log('data name : ', data[1].imageUrl)



  return (

    <section className='h-screen  max-w-7xl mx-auto py-10'>

      <div

        className='flex justify-between items-center'>
        <div>
          <h1 className='text-4xl font-semibold'>Choose Destinations</h1>
          <p className='text-gray-800 mt-2'>Explore Diverse Destinations, Uncover Captivating Descriptions</p>
        </div>
        <button className='px-8 h-[48px] hover:bg-gray-200 border border-black rounded-xl'>See All</button>
      </div>




      {/* image gallery */}
      <div className='grid mt-10 grid-cols-4 gap-4 grid-flow-row-dense grid-rows-2'>

        <Link className='rounded-xl relative overflow-hidden max-h-[270px]' href={`/destination/${data[0].slug}`}>
          <p className='absolute z-[10]  text-white font-semibold top-4 left-4 text-lg'>{data[0].destinationName}</p>
          <img className='w-full h-full object-cover ease-in duration-300 transition transform hover:scale-105' src={data[0].imageUrl} alt="sa" />
        </Link>

        <Link className="row-span-2 relative rounded-xl max-h-[555px] overflow-hidden" href={`/destination/${data[1].slug}`}>

          <img className='w-full h-full object-cover ease-in duration-300 transition transform hover:scale-105' src={data[1].imageUrl} alt="sa" />
          <p className='absolute z-[10] text-white font-semibold top-4 left-4 text-lg'>{data[1].destinationName}</p>
        </Link>

        <Link className='col-span-2 relative overflow-hidden rounded-xl max-h-[270px]' href={`/destination/${data[2].slug}`}>
          <img className='rounded-xl w-full h-full object-cover ease-in duration-300 transition transform hover:scale-105' src={data[2].imageUrl}
            alt="sa" />
          <p className='absolute text-white font-semibold top-4 left-4  text-lg'>{data[2].destinationName}</p>
        </Link>

        <Link
          className='rounded-xl relative max-h-[270px] ' href={`/destination/${data[2].slug}`}>
          <img className='rounded-xl w-full h-full object-cover' src={data[3].imageUrl} alt="sa" />
          <p className='absolute text-white font-semibold top-4 left-4  text-lg'>{data[3].destinationName}</p>

        </Link>

        <Link href={`/destination/${data[2].slug}`} className='rounded-xl relative max-h-[270px]'>
          <img className='rounded-xl w-full h-full object-cover' src={data[4].imageUrl} alt="sa" />
          <p className='absolute text-white font-semibold top-4 left-4  text-lg'>{data[4].destinationName}</p>
        </Link>

        <Link href={`/destination/${data[2].slug}`} className='rounded-xl relative max-h-[270px]'>
          <img className='rounded-xl w-full h-full object-cover' src={data[5].imageUrl} alt="sa" />
          <p className='absolute text-white font-semibold top-4 left-4  text-lg'>{data[5].destinationName}</p>
        </Link>


      </div>
    </section >
  )
}

export default Destination