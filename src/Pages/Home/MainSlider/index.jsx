import React, { useEffect, useState } from 'react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { fetchData } from '../../../Utils/fetchData';
import Skeleton from './Skeleton';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react';
export default function MainSlider() {
    const [sliders,setSliders]=useState()

    useEffect(()=>{
        (async()=>{
            const res = await fetchData('sliders')
            setSliders(res.data)
        })()
    },[])
    if(!sliders) return <Skeleton/>
    const items= sliders?.map((item)=><SwiperSlide key={item._id} className="relative h-full overflow-hidden rounded-2xl">
      <img className="h-full w-full object-cover" src={import.meta.env.VITE_BASE_FILE_URL + item.image} alt={item.title}/>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-6 pb-8 pt-16 text-xl font-bold text-white sm:text-3xl">{item.title}</span>
    </SwiperSlide>)
  return (
    <div className='mx-auto h-[38svh] w-full max-w-7xl overflow-hidden rounded-2xl px-4 sm:h-[52svh] sm:px-6 lg:h-[60svh] lg:px-8'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {items}
      </Swiper>
    </div>
  )
}
