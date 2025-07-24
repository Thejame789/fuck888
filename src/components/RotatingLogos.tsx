'use client'
import React from 'react'

const RotatingLogos = () => {

    const logos = [
    { name: 'PayPal', src: '/images/logo/logo1.png' },
    { name: 'Coinbase', src: '/images/logo/logo2.png' },
    { name: 'Binance', src: '/images/logo/logo3.png' },
    { name: 'Revolut', src: '/images/logo/logo4.png' },
    { name: 'Kraken', src: '/images/logo/logo5.png' },
    { name: 'BITFINEX', src: '/images/logo/logo6.png' },
    // Duplicate logos to create a seamless loop
    { name: 'PayPal', src: '/images/logo/logo1.png' },
    { name: 'Coinbase', src: '/images/logo/logo2.png' },
    { name: 'Binance', src: '/images/logo/logo3.png' },
    { name: 'Revolut', src: '/images/logo/logo4.png' },
    { name: 'Kraken', src: '/images/logo/logo5.png' },
    { name: 'BITFINEX', src: '/images/logo/logo6.png' },
      
  ];

  return (
    <div>
        <style>
            {`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%); /* Move by 50% to loop seamlessly with duplicated content */
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite; /* Adjust duration for speed */
        }

        .animate-scroll-left:hover {
          animation-play-state: paused; /* Pause animation on hover */
        }
        `}
        </style>
    <div className="w-full  flex overflow-hidden  py-8 border-t  shadow-xl rounded-lg">
        {/* Inner container for the logos that actually scrolls */}
        <div className=" justify-end items-center whitespace-nowrap animate-scroll-left w-full"> {/* ใช้ animate-scroll-left และ w-max */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="inline-block px-4 py-2 cursor-pointer" // Add cursor-pointer   
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-16 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = `https://placehold.co/120x60/CCCCCC/000000?text=${logo.name}`; }} // Fallback image
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default RotatingLogos
