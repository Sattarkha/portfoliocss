import React from 'react';
import Image from 'next/image';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px]" data-aos="zoom-in-up">
      {/* Image Section */}
      <div>
        <Image
          className="w-full h-48 object-cover" // This ensures the image takes full width and fixed height
          src={img}
          width={350}  // Ensure these match your intended size
          height={200} // Fixed height for uniformity
          alt={title}
        />
      </div>

      {/* Text and Tags Section */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <div className="text-2xl font-extralight">{title}</div>
        
        {/* Description */}
        <div>{desc}</div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((el) => (
            <div
              className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold"
              key={el}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
