import Slider from '@/components/common/Slider'
import React from 'react'
import slide1 from "@/assets/images/dt2.webp"
import slide2 from "@/assets/images/dt3.webp"
const slides=[
    {
        title:"slide1",
        img:slide1
    },
    {
        title:"slide2",
        img:slide2
    }
]


function About() {
  return (
    <div>
      about
      <Slider slides={slides} renderSlider={(slide)=>(  <div>  
      <h1>{slide.title}</h1>
      <img src={slide.img} alt="" />  
    </div>
    
      )}/>
    </div>
  
  )
}

export default About
