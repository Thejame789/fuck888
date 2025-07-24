'use client'
import { Avatar, AvatarGroup, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'


const Heaeder = () => {
  return (
    <Grid container spacing={6} sx={{height:'auto', width:'auto'}}>
        <Grid  size={{xs: 12 , md:6 }} sx={{padding:'5%'}}>
            
              <div className="space-y-4 flex flex-col items-center">
                  <div className="main pt-1 font-bold text-white text-4xl font-roboto">
                      <h1>Welcome to Wadafuck888</h1>
                      <p>Play Bold Win Loud. Bet Like You Mean It.</p>
                  </div>
                  <div className="text-white py-3">
                      Step into the craziest online casino universe —
                      From epic slots to thrilling sports bets and lss
                      Where luck meets attitude and every spin could change your life.
                  </div>
                  <div className="text-white p-4 bg-gradient-to-l from-purple-900 via-blue-800 to-blue-700 rounded-2xl w-96">
                      <div className="md:flex justify-between space-y-2.5">
                          <div className="game - font-roboto justify-items-center">
                              <h3 className="font-bold">👉5,000 +</h3>
                              <h3>Over Games</h3>
                          </div>
                          <div className="game - font-roboto justify-items-center">
                              <h3 className="font-bold">👉Instant !</h3>
                              <h3>Withdrawals</h3>
                          </div>
                          <div className="game - font-roboto self justify-items-center">
                              <h3 className="font-bold">👉Daily Bonuses</h3>
                              <h3>or True Players</h3>
                          </div>
                      </div>

                  </div>

                  <div className="active  flex justify-between items-center">
                      <div className="p-3 self-stretch">
                          <AvatarGroup total={24} >
                              <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" sx={{ width: 56, height: 56 }}  />
                              <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" sx={{ width: 56, height: 56 }}  />
                              <Avatar alt="Agnes Walker" src="/images/avatar/4.jpg" sx={{ width: 56, height: 56 }} />
                              <Avatar alt="Trevor Henderson" src="/images/avatar/5.jpg" sx={{ width: 56, height: 56 }} />
                          </AvatarGroup>

                      </div>
                      <div className="text-white font-mono flex flex-grow justify-center items-center">
                          <h1>40k+</h1>
                      </div>

                  </div>
              </div>

        
            
        </Grid>
        <Grid size={{xs:12 , md:6}} sx={{ height:"auto"}}>
            <img
                src="images/img3.jpg"
                alt={"bet"} 
                className="object-cover h-full mask-x-from-90% mask-x-to-100% mask-y-from-90% mask-y-to-100%"  />
        </Grid>
        
    </Grid>  
  )
}

export default Heaeder
