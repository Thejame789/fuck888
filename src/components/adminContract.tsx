'use client'
import React from 'react'

// import icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Avatar } from '@mui/material';

const adminContract = () => {
  return (
    <div className='flex justify-between p-3 bg-gray-700 w-full h-full '>
        <div className=' flex flex-col justify-center items-start leading-4 text-xs'>
            <p>Admin</p>
            <p>Contract?
                <ArrowForwardIcon 
                sx={{width:"10px"}}/>
            </p>
        </div>
        <div className=" flex justify-end items-center">
            <div className='flex flex-col items-end pr-4 leading-5 md:leading-8'>
                  <p className='text-[15px] md:text-[30px]  text-orange-500'
                  >Admin</p>
                  <p className='text-[25px] md:text-[50px] text-white'
                  >Contract</p>
                {/* <div className='text-xs md:text-4xl text-orange-500 '>
                    <p>Admin</p>
                </div>
                <div className='text-2xl md:text-5xl font-semibold text-white'>
                    <p>Contract</p>
                </div> */}
            </div>
            
            <div className="main-admin flex justify-center items-center space-x-3 text-white">
                <div className='Admin1 flex flex-col items-center'>
                <div className="image">                  
                    <div className="w-full">
                        <Avatar
                            sx={{
                                width: { xs: 60, md: 150 },
                                height: { xs: 60, md: 150 },
                                border: '3px solid white'
                            }}
                            alt="Cindy Baker"
                            src="/images/admin/1.jpg"
                        />
                    </div>
                     
                </div>
                <div className="name flex flex-col items-center text-[8px] md:text-xl">
                    <p>Mr.Ninja Wadafuck</p>
                    <p>admin</p>
                </div>  
            </div>
            <div className='Admin2 flex flex-col items-center'>
                <div className="image">                  
                     <div className="w-full">                       
                         <Avatar 
                             sx={{
                                width: { xs: 60, md: 150 },
                                height: { xs: 60, md: 150 },
                                border: '3px solid white'
                            }}                          
                            alt="Cindy Baker" 
                            src="/images/admin/1.jpg"/>
                     </div>
                     
                </div>
                <div className="name flex flex-col items-center text-[8px] md:text-xl">
                    <p>Mr.Ninja Wadafuck</p>
                    <p>admin</p>
                </div>  
            </div>
            <div className='Admin3 flex flex-col items-center'>
                <div className="image">                  
                     <div className="w-full">                       
                         <Avatar 
                             sx={{
                                width: { xs: 60, md: 150 },
                                height: { xs: 60, md: 150 },
                                border: '3px solid white'
                            }}                           
                            alt="Cindy Baker" 
                            src="/images/admin/1.jpg"/>
                     </div>
                     
                </div>
                <div className="name flex flex-col items-center text-[8px] md:text-xl">
                    <p>Mr.Ninja Wadafuck</p>
                    <p>admin</p>
                </div>  
            </div>

            </div>

           
           
        </div>
    </div>
  )
}

export default adminContract
