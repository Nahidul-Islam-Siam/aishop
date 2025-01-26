import Image from 'next/image';
import mockupImage from '../../public/Card 3.svg';
import mockupImage2 from '../../public/Frame 1136abcf.svg';
import Button from './Button';

const Hero2 = () => {
    return (
        <section className="bg-black dark:bg-gray-900">
            <div className="flex flex-col-reverse lg:flex-row max-w-screen-xl justify-between px-4 py-12 mx-auto gap-8 items-center">
                <div className="flex justify-center items-center">
                    <div className="relative">
                        <Image
                            src={mockupImage}
                            alt="mockup"
                            width={554}
                            height={450}
                            priority
                            className="object-contain"
                        />
                        <Image
                            src={mockupImage2}
                            alt="mockup"
                            width={554}
                            height={450}
                            priority
                            className="absolute right-2 top-2"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <h1 className="outfit-font font-semibold mb-6 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                        Create content efficiently <br className="hidden lg:block" /> and quickly with great AI <br className="hidden lg:block" /> writing tools
                    </h1>
                    <p className="max-w-2xl mb-6 text-gray-400 text-base sm:text-lg lg:text-xl">
                        150k+ users. No Credit Card Required. Pro designs and <br />writing at no cost. Start for free. Ai Writer Tool | Generate<br /> text for ecom, social media, website, sales, blogs etc.
                    </p>
                    <div className="flex justify-center lg:justify-start w-full">
                        <Button>Start 14 Days Free Trial</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
