import Card from '@/components/ui/Card'
import React from 'react'
import { GiHeron } from 'react-icons/gi'

function Hero() {
  return (
    <div className='bg-amber-400'>
      <Card className='bg-blue-400 w-38'> 
        <h1>Hero Section</h1>
        <p>Lorem ipsum dolor sit.</p>
        <GiHeron />
      </Card>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eos?</p>
    </div>
  )
}

export default Hero
