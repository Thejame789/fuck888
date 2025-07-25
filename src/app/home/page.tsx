'use client'
import React from 'react'

import Navbar from '@/components/Navbar'
import Heaeder from '@/components/Heaeder'
import RotatingLogos from '@/components/RotatingLogos'
import PopularGame from '@/components/PopularGame'
import Cardgame from  '@/components/Cardgame'

export default function homepage () {
  return ( 
    <div>
      <Navbar/>

      <div className="flex p-4 flex-col space-y-4"> 
        <div>
          <Heaeder/>
          </div>    
        </div>

          <RotatingLogos/>   
          <PopularGame/>
          <Cardgame/>
          <div className="text-white">footer</div>
    
    </div>
  )
}


