import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const cards = [
    {
      id: 1,
      title: "Mountain Adventure",
      description: "Explore the majestic peaks and valleys of the Himalayas",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      link: "#"
    },
    {
      id: 2,
      title: "Beach Paradise",
      description: "Relax on pristine beaches with crystal clear waters",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      link: "#"
    },
    {
      id: 3,
      title: "Urban Exploration",
      description: "Discover hidden gems in vibrant city landscapes",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      link: "#"
    },
    {
      id: 4,
      title: "Forest Retreat",
      description: "Find peace and tranquility in ancient woodland",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b",
      link: "#"
    },
    {
      id: 5,
      title: "Desert Safari",
      description: "Experience the magic of endless sand dunes",
      imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
      link: "#"
    }
  ];

const Cardgame = () => {
  return (
    <div className=" space-y-10">
        <div className="header pt-10">
            <h1 className="text-2xl font-bold text-center text-white font-sans">Popular Games</h1>
        </div>
        
        <div className="card">
          <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          >
          
            {cards.map((card) => (
              <SwiperSlide>
              <div className="bg-white/4 max-h-96  max-w-72 mx-auto">
                
                <div
                  className="w-full h-full  rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                  role="article"
                  tabIndex={0}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className=" left-0 right-0 bottom-0 h-1/4 bg-white  flex justify-between  items-center p-4">
                    <div>
                      <h3 className="text-black text-xl font-bold">{card.title}</h3>
                      <p className="text-black-200 text-sm mt-1">By Anthony Gorgonz</p>
                    </div>

                    <div className="self-end flex justify-center items-center text-md">
                      <span className="text-black mt-2">50K</span>
                    </div>
                  </div>
                </div>

              </div>
              </SwiperSlide>    
            ))}
            
          </Swiper>

                  
        </div>
      
    </div>
  )
}

export default Cardgame
