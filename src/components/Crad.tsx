import { Card, CardMedia } from '@mui/material';
import React from 'react'
import { FiHeart } from "react-icons/fi";

// ข้อมูลสำหรับการ์ดแต่ละใบ (เหมือนเดิม)
const cardsData = [
  { id: 1, image: 'https://placehold.co/300x400/8A2BE2/FFFFFF?text=NFT+1', title: 'Digital Decade', artist: 'By Anthony Gorgonz', price: '3.45 ETH', likes: '50k' },
  { id: 2, image: 'https://placehold.co/300x400/FF00FF/FFFFFF?text=NFT+2', title: 'Versace', artist: 'By Donatella', price: '2.1 ETH', likes: '30k' },
  { id: 3, image: 'https://placehold.co/300x400/00FFFF/000000?text=NFT+3', title: 'Winter Jam', artist: 'By Ice King', price: '4.7 ETH', likes: '70k' },
  { id: 4, image: 'https://placehold.co/300x400/FFFF00/000000?text=NFT+4', title: 'Pastel Wiley', artist: 'By Color Queen', price: '1.9 ETH', likes: '25k' },
  { id: 5, image: 'https://placehold.co/300x400/FF8C00/FFFFFF?text=NFT+5', title: 'Cyberpunk City', artist: 'By Neo Artist', price: '5.0 ETH', likes: '80k' },
  { id: 6, image: 'https://placehold.co/300x400/4CAF50/FFFFFF?text=NFT+6', title: 'Green World', artist: 'By Nature Art', price: '1.5 ETH', likes: '20k' },
  { id: 7, image: 'https://placehold.co/300x400/2196F3/FFFFFF?text=NFT+7', title: 'Blue Horizon', artist: 'By Sky Painter', price: '3.0 ETH', likes: '45k' },
];
const Crad = () => {
  return (
    <div className="bg-white/0 max-h-96  max-w-72">
         <div 
              className="relative w-full h-full rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              role="article"
              tabIndex={0}
            >
                <img
                src="https://placehold.co/300x400/8A2BE2/FFFFFF?text=NFT+1"
                alt="Digital Decade"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* overlay ไม่เต็ม parent แต่ชิดล่างและสูง 1/3 ของ parent */}
              <div className="absolute left-0 right-0 bottom-0 h-1/4 bg-gradient-to-r from-purple-300/60 via-violet-300/60 to-cyan-300/60  flex justify-between  items-center p-4">
                <div>
                    <h3 className="text-white text-xl font-bold">Digital Decade</h3>
                    <p className="text-gray-200 text-sm mt-1">By Anthony Gorgonz</p>
                </div>

                <div className="self-end flex justify-center items-center text-md">
                  
                    <FiHeart className="text-white mt-2" />
                    &nbsp;
                    <div className="text-white mt-2 ">           
                       <span className="font-bold">50K</span>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Crad
