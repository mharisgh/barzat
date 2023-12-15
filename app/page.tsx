import Image from 'next/image'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import Related from './components/Related'

export default function Home() {
  return (
    <div className='mx-auto'>
      <Hero/>
      <Related/>      
    </div>
  )
}
