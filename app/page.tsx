import { Hero } from './components/Hero'
import Related from './components/Related'
import Destination from './components/Destination';
import Whybarzat from './components/Whybarzat';
import Features from './components/Features';

export const dynamic = "force-dynamic";


export default function Home() {
  return (
    <div className='mx-auto'>
      <Hero/>
      <Features/>
      <Destination/>
      <Whybarzat/>
      <Related/>      
    </div>
  )
}
