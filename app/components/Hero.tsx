// 'use client' 
import Image from 'next/image'
import React from 'react'
import { client, urlFor } from '../lib/sanity';

async function getData() {
  const query = "*[_type == 'heroImages']"

  const data = await client.fetch(query)

  return data;

}

export const Hero = async () => {
  const data = await getData()

  console.log(data)

  return (
    <section className='max-w-2xl lg:max-w-7xl bg-red-100 mx-auto'>
      <div>
        <div>
          <h1>Best Travel Agency in UAE</h1>
          <Image
            src={urlFor(data[0].image).url()}
            alt='test'
            width={250} height={250}
          />
          <Image
            src={urlFor(data[1].image).url()}
            alt='test'
            width={250} height={250}
          />
        </div>
      </div>
    </section>
  )
}
