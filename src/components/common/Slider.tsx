
import {  useState, type ReactNode,  } from "react"
interface sliderProps<T>{
    renderSlider:(item:T)=>ReactNode; 
    slides:T[] 
    dot:boolean
}  


function Slider<T>({renderSlider, slides}:sliderProps<T>) {
    const [current,setCurrent]=useState(0);

  return (
    <div>
        <div className="flex gap-6">
            <button onClick={()=>current===0?setCurrent(slides.length-1):setCurrent(current-1)} className="bg-amber-300">prev</button>
            <button onClick={()=>current===slides.length-1?setCurrent(0):setCurrent(current+1)} className="bg-amber-300">next</button>
        </div>
{renderSlider(slides[current])}     
     
    </div>
  )
}

export default Slider
