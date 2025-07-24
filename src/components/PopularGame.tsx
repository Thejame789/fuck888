'use client'
import { Facebook, FacebookOutlined, Instagram, Twitter } from '@mui/icons-material';
import { Box, Button, createTheme, Grid, IconButton, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { BsWechat } from 'react-icons/bs';

// Import Icon
import { MdOutlineSportsHandball } from "react-icons/md";
import { PiWechatLogo } from 'react-icons/pi';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { create } from 'domain';

// Interface สำหรับโครงสร้างข้อมูลแต่ละสไลด์
interface DestinationData {
  id: string;
  backgroundImage: string;
  title: string;
  aboutText: string;
  photos: { src: string; alt: string }[];
  locations: string[];
}

// ข้อมูลจำลองสำหรับแต่ละสไลด์ใน Carousel
const destinations: DestinationData[] = [
  {
    id: 'borobudur',
    backgroundImage: '/images/sportGame/1.jpg',
    title: 'Foot Ball',
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    photos: [
      { src: 'https://play-lh.googleusercontent.com/7fWZqkilW8bBXzlqp6NCg4-F2Qt8GKcIrWhaj0Ii7oSvDvTQg3UcYBxmA9Uq5Ojpow', alt: 'Borobudur Photo 1' },
      { src: 'https://i.guim.co.uk/img/media/e1e21e4575b07689b9eae11f50244e0a34e78774/0_0_4773_3820/master/4773.jpg?width=1200&quality=85&auto=format&fit=max&s=bd4e38aa3a0ee599437a019d38b8b236', alt: 'Borobudur Photo 2' },
      { src: 'https://static.independent.co.uk/2021/12/23/13/GettyImages-1356818892.jpg', alt: 'Borobudur Photo 3' },
      { src: 'https://cdn.britannica.com/81/237081-050-B81A9DDA/Manchester-City-Football-Club-Kevin-De-Bruyne-soccer-action-2022.jpg', alt: 'Borobudur Photo 4' },
    ],
    locations: ['Yogyakarta', 'Raja Ampat'],
  },
  {
    id: 'destination-b',
    backgroundImage: '/images/sportGame/2.jpeg',
    title: 'bastketball',
    aboutText: 'This is another amazing destination with beautiful sights and rich culture. Explore its hidden gems and natural wonders.',
    photos: [
      { src: 'https://placehold.co/150x100/E0E0E0/FFFFFF?text=Place+A', alt: 'Place A Photo 1' },
      { src: 'https://placehold.co/150x100/F0F0F0/FFFFFF?text=Place+B', alt: 'Place B Photo 2' },
      { src: 'https://placehold.co/150x100/101010/FFFFFF?text=Place+C', alt: 'Place C Photo 3' },
      { src: 'https://placehold.co/150x100/202020/FFFFFF?text=Place+D', alt: 'Place D Photo 4' },
    ],
    locations: ['Bali', 'Lombok'],
  },
  {
    id: 'destination-c',
    backgroundImage: '/images/sportGame/3.jpg',
    title: 'ONE Championship',
    aboutText: 'Discover the tranquility and breathtaking landscapes of this unique location, perfect for relaxation and adventure.',
    photos: [
      { src: 'https://placehold.co/150x100/303030/FFFFFF?text=Spot+X', alt: 'Spot X Photo 1' },
      { src: 'https://placehold.co/150x100/404040/FFFFFF?text=Spot+Y', alt: 'Spot Y Photo 2' },
      { src: 'https://placehold.co/150x100/505050/FFFFFF?text=Spot+Z', alt: 'Spot Z Photo 3' },
      { src: 'https://placehold.co/150x100/606060/FFFFFF?text=Spot+W', alt: 'Spot W Photo 4' },
    ],
    locations: ['Phuket', 'Chiang Mai'],
  },
];

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontSize: '2rem',
          padding: 0,
          '@media (min-width: 600px)': {
            fontSize: '2rem',
            padding: 8,
          },
          '@media (min-width: 900px)': {
            fontSize: '2.5rem',
          },
        },
      },
    },
  },
});

const PopularGame = () => {

  return (
    <ThemeProvider theme={theme}>
       <Grid container spacing={3} sx={{paddingTop:"20px"}}>
        <Grid size={{ xs:12}} >
            <div className="text-white flex justify-center text-4xl font-mono font-bold">    
                Popular this week
            </div>
        </Grid>
        <Grid size={{xs:12}} sx={{backgroundColor:"gray"}}>
            <div className="Carousel relative w-full  overflow-hidden md:w-full md:h-screen">
                {/* Logo */}
                <div className="absolute left-4 sm:top-8 md:left-8 md:top-16 z-20 flex items-center text-white">
                    <Typography  className='font-semibold' variant='h4' sx={{
                      fontSize: {
                        xs: '1.25rem',
                        sm: '1.75rem',
                        md: '2.25rem',
                      },
                    }}>
                        Sport Game
                    </Typography>
                    <Typography variant="h4" className='font-light'
                      sx={{
                        fontSize: {
                          xs: '1.25rem',
                          sm: '1.75rem',
                          md: '2.25rem',
                        },
                      }}>                       
                        <MdOutlineSportsHandball/>
                    </Typography>                 
                </div>
                
                {/* // Social Media Icons */}
                <div className='absolute left-5 top-1/4 sm:top-1/3  md:left-20  md:top-1/3 flex flex-col items-center space-y-5  md:space-y-6 z-20 text-white'>  
                    <div className='top-line w-1 h-6  md:h-12 bg-white opacity-80'></div>
                    <IconButton
                      color="inherit"
                      aria-label="Instagram"                    
                    >
                      <Instagram
                        fontSize="inherit"
                        sx={{
                          fontSize: { xs: '1.5rem', sm: '3rem', md: '2.5rem' },
                        }}
                      />
                    </IconButton>
                    <IconButton color='inherit' aria-label="Facebook">
                        <Facebook fontSize="large" 
                        sx={{
                          fontSize: { xs: '1.5rem', sm: '3rem', md: '2.5rem' },
                        }}/>
                    </IconButton>
                    <IconButton color='inherit' aria-label="Instagram">
                        <Twitter fontSize="large" sx={{
                          fontSize: { xs: '1.5rem', sm: '3rem', md: '2.5rem' },
                        }}/>
                    </IconButton>
                     <div className='under-line w-1 h-6  md:h-12 bg-white opacity-80'></div>            
                </div>

                <Swiper
                  centeredSlides={true}
                  autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper w-full h-full"
                >
                  {destinations.map((destination, index) => (
                  <SwiperSlide key={index}>
                    <Box
                    className="relative w-full flex flex-col justify-center items-center text-white"
                    sx={{
                      minHeight: { xs: 350, sm:'100vh' , md: '100vh' },
                      backgroundImage: `url(${destination.backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      zIndex: 0,
                      },
                    }}
                    >              
                      <Box
                        className="absolute inset-0 flex flex-col justify-start text-white"
                        sx={{
                        zIndex: 1,
                        width: '100%',
                        height: '100%',
                        // justifyContent: 'center',
                        }}>
                        <Typography
                        variant="h2"
                        className="mb-2 pl-20 pt-15 sm:pl-40 sm:pt-30 md:pl-55 md:pt-30 lg:pl-72 lg:pt-35 font-bold font-roboto"
                        sx={{
                          fontSize: { xs: '1.5rem', sm: '3rem', md: '5rem' },
                          fontWeight: 'bold',
                          //  textAlign: 'center',
                          mb: { xs: 1, sm: 2 },
                        }}
                        >
                        {destination.title}
                        </Typography>
                        
                        <div className="content flex flex-col items-start pl-20 pt-2 md:pl-55 md:pt-5 lg:pl-72 lg:pt-10 font-light">
                          <div className="title border-b-3 md:border-b-5 border-white mb-2  text-[10px] md:text-[20px] lg:text-2xl font-bold">
                            <h3>About</h3>
                          </div>
                          <div className="detail w-2/3 md:min-w-2/3">
                             <p className=" text-white text-xs xs:truncate  md:text-xl lg:text-2xl  text-clip ">
                                {destination.aboutText}                    
                              </p>
                          </div>
                          <div className="read w-full">
                                <Button variant="contained" size="small" sx={{ mt: 2, color: 'black', borderColor: 'white' ,backgroundColor:'white' ,borderRadius:'20px' }}>
                                READ MORE
                              </Button>
                          </div>
                         
                          
                        </div> 

                        <Box
                          className="absolute bottom-0 left-0 right-0 flex justify-end items-center p-4"
                          sx={{
                            zIndex: 1,
                            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          }}>
                          <div className="photos flex space-x-2">
                            {destination.photos.map((photo, photoIndex) => (
                              <img
                                key={photoIndex}
                                src={photo.src}
                                alt={photo.alt}
                                className="w-15 h-18 sm:w-30 sm:h-35 md:w-30 object-cover rounded-lg hover:scale-120 transition-transform duration-300"
                              />
                            ))}
                          </div>
                        </Box>                       
                      </Box>

                                    
                    </Box>
                  </SwiperSlide>
                  ))}
                </Swiper>

            </div>
        </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default PopularGame
