import React, { useEffect, useState } from 'react'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import { fetchData } from '../../../Utils/fetchData';
import Skeleton from './Skeleton';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
export default function MainSlider() {
    const [sliders,setSliders]=useState()

    useEffect(()=>{
        (async()=>{
            const res = await fetchData('/sliders')
            setSliders(res.data)
        })()
    },[])
    if(!sliders) return <Skeleton/>
    const items= sliders?.map((item)=><SwiperSlide>
        <img src={import.meta.env.VITE_BASE_FILE_URL + item.image} alt={item.title}/>
        <span>{item.title}</span>
    </SwiperSlide>)
  return (
    <div className='w-[96%] h-[60svh] rounded-2xl'>
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {items}
      </Swiper>
    </div>
  )
}
