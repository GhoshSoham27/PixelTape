import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';
import React from 'react'

const page = async ({params}: ParamsWithSearch) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {id} = await params;
  return (
    <div className='wrapper page'>
        <Header subHeader="gsoham101gmail.com" title="Soham | Chillboy Services" userImg="/assets/images/dummy.jpg"/>
        <section className='video-grid'>
          {dummyCards.map((card) => (
            <VideoCard key={card.id} {...card} />
          ))}
        </section>
    </div>
  )
}

export default page