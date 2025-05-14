import Header from '@/components/Header'
import React from 'react'

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title='All Videos' subHeader='Public Library' />
      <h1 className='text-2xl font-karla'>Welcome to PixelPage</h1>
      <p className='font-karla'>An AI based screen recorder</p>
    </main>
  )
}

export default Page