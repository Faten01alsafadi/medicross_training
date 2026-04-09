import type { ReactNode } from "react";

interface CardProps{
    children:ReactNode;
    className:string
}

function Card({children,className}:CardProps) {
  return ( 
    <div className={`px-3 py-5 rounded-xl ${className}`}> 
      {children}        
    </div>
  ) 
}

export default Card
