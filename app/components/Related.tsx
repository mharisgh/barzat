import React from 'react'
import { client } from '../lib/sanity'
import { simplifiedPackage } from '../interface';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const query = `*[_type == "destination"][0...4]
  {
    _id,
    "slug": slug.current,
    "destinationName": name,
    "imageUrl" : destinationImg.asset->url
}`
// const query = `*[_type == "holidaypackage"][0...8]  | order(_createdAt desc)
// {
//   _id,
//   days,
//   location,
//   "slug": slug.current,
//   "destinationName": destination->name,
//   "imageUrl" : images.asset->url
// }`
  const data = await client.fetch(query)
  return data;
}


export default async function Related() {
  const data: simplifiedPackage[] = await getData()

  return (
    <div>
      <div className='lg:max-w-7xl'>
        <h2>Related Packages here</h2>
        <Link href="/all">See All</Link>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-red-800'>
          {data.map((packages) => (
            <div key={packages._id} className='group relative  bg-red-100'>
              <div className='aspect-square bg-green-700 w-full lg:h-80'>

                <Image src={packages.imageUrl} alt='test' width={100} height={100}
                  className='w-full h-full object-cover object-center'
                />
              </div>

              <div className='mt-4'>
                <h3>
                  <Link href={`/destination/${packages.slug}`}>
                  {packages.destinationName}
                  </Link>
                </h3>
              </div>
            </div>

          ))}
        </div>


      </div>
    </div>
  )
}