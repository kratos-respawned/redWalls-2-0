import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {GiHamburgerMenu} from "react-icons/gi"
const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen'>
      <Head>
        <title>RedWalls</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className='bg-slate-800 py-3 px-4 relative text-slate-200 flex justify-between items-center'>
        <div>LOGO</div>
        <ul className='flex flex-col items-center w-full absolute bottom-0 left-0 translate-y-full  transition-transform'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Wallpaper</Link></li>
          <li><Link href="/">WideScreen</Link></li>
          <li><Link href="/">Phone</Link></li>
          <li><Link href="/">Anime</Link></li>
        </ul>
        <button><GiHamburgerMenu/></button>
      </nav>
      <main className='bg-slate-900 text-white'>

      </main>
    </div>
  )
}

export default Home
