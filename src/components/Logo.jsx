import React from 'react';
import Image from 'next/image';

const logos = [
  { name: 'waverio', src: '/Logo.svg', width: 164, height: 36 }, // Add width and height
  { name: 'SquareStone', src: '/Logo (1).svg', width: 186.89, height: 39.15 },
  { name: 'martino', src: '/Logo (2).svg', width: 175.85, height: 29.43 },
  { name: 'Virogan', src: '/Logo (3).svg', width: 187.22, height: 37.33 },
  { name: 'VERTEX', src: '/Logo (4).svg', width: 179.96, height: 31.14 },
  { name: 'aromix', src: '/Logo (5).svg', width: 161.9, height: 28 },
  { name: 'fireli', src: '/Logo (6).svg', width: 102.86, height: 31 },
  { name: 'Nacrema', src: '/Logo (7).svg', width: 155, height: 34 },
];

const LogoSection = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400 text-sm mb-8">
          Trusted by nearly 5000+ paying customers
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 ">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center relative h-12 w-auto"> {/* Added relative and height */}
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                layout="intrinsic" // Important for preventing CLS
                objectFit="contain" // Ensures image fits within its container
                className="grayscale opacity-75 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;