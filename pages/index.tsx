import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import logo from '../public/logo.png'

const Home: NextPage = () => {
  return (
    <div className='container px-2 mx-auto my-12 space-y-12 text-center sm:px-4 sm:my-24 sm:space-y-24'>
      <Head>
        <title>SPACEMAS 2021</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='space-y-2 sm:space-y-4'>
        <Image
          src={logo}
          alt='SPACEGOATS Logo'
          width={150}
          height={128}
          priority
        />
        <h1 className='mx-auto text-4xl font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600 sm:text-6xl'>
          SPACEMAS 2021
        </h1>
        <h3 className='mx-auto text-xl text-gray-200 w-fit sm:text-3xl'>
          17.12.2021
        </h3>
      </header>
    </div>
  )
}

export default Home
