import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url('/image_bg.png')] bg-left lg:bg-[15%] bg-cover"
      style={{ backgroundSize: '30%' }}
    >
      {/* Navbar alignment */}
      <div className="container mx-auto flex justify-between items-center py-6 px-4 lg:px-8">
        <Navbar />
      </div>

      {/* Hero Content - Image and Text in a Row */}
      <div className="container mx-auto flex items-center justify-evenly h-[calc(100vh-60px)] gap-20">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/path/to/your/profile_image.jpg" // Adjust path according to your file location
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover" // Adjust size as needed
          />
        </div>

        {/* Text Content */}
        <div className="text-[50px] sm:text-[90px] font-bold leading-tight ">
          <p data-aos="zoom-in-up">I'm</p>
          <p data-aos="zoom-in-up">Abdul</p>
          <p data-aos="zoom-in-up">Sattar</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
