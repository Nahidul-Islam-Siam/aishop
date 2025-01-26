import Image from 'next/image';
import mockupImage from '../../public/Card 1.svg';
import Button from './Button';

const Hero3 = () => {
  return (
    <section className="bg-black dark:bg-gray-900">
      <div className="flex flex-col-reverse lg:flex-row max-w-screen-xl justify-between px-4 py-12 mx-auto gap-8 items-center">
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="outfit-font font-semibold mb-6 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Write what you want to <br className="hidden lg:block" /> convey through clear, & <br className="hidden lg:block" /> authentic writing
          </h1>
          <p className="max-w-2xl mb-6 text-gray-400 text-base sm:text-lg lg:text-xl">
            AI Writer is the most accurate content generation platform and <br /> writing tool that helps you transform your text into something <br /> completely personalized.
          </p>
          <div className="flex justify-center lg:justify-start w-full">
            <Button>Start 14 Days Free Trial</Button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={mockupImage}
            alt="mockup"
            width={554}
            height={450}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3;