// import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/navbar'
import HomePage from './components/home'

export default function Home() {
  return (
    <main>
      <div style={{position:"fixed",zIndex:1,width:"100%"}}>
        <Navbar/>
      </div>
      <HomePage/>
    </main>
  )
}
