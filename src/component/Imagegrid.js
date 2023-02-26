import React from 'react';

import image1 from '../images/21.gif';
import image2 from '../images/22.gif';
import image3 from '../images/23.gif';
import image4 from  '../images/24.gif';
import image5 from '../images/25.gif';

function ImageGrid() {
  const images = [
    { src: image1, alt: 'Image 1', link: 'component1.js' },
    { src: image2, alt: 'Image 2', link: 'component2.js' },
    { src: image3, alt: 'Image 3', link: 'component3.js' },
    { src: image4, alt: 'Image 4', link: 'component4.js' },
    { src: image5, alt: 'Image 5', link: 'component5.js' },
  ];

  const handleClick = (link) => {
    const script = document.createElement('script');
    script.src = link;
    document.body.appendChild(script);
  };

  return (
    <div className="max-w-xs mx-auto lg:max-w-xs">
      <h1 className="text-2xl font-bold mb-4 md:mb-2">How are you feeling?</h1>
      <div className="grid grid-cols-5 gap-4">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover max-w-xs"
            onClick={() => handleClick(image.link)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
