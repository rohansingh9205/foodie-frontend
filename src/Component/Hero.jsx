import React from 'react'
import assets from '../assets/assets.js'

const Hero = () => {

  return (

    <div
      id='home'
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url('${assets.heroImg}')` }}
    >

      {/* overlay */}

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-6 h-full flex items-center z-10 relative">

        <div className="max-w-2xl text-white">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience Fine Dining
          </h2>

          <p className="text-xl mb-8">
            Indulge in our exquisite culinary creations crafted with passion
            and the finest ingredients.
          </p>

          <button
            onClick={() => {
              document
                .getElementById("reservation")
                .scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-block bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full cursor-pointer transition duration-300 transform hover:scale-110"
          >
            Book a Table
          </button>

        </div>

      </div>

    </div>
  )
}

export default Hero