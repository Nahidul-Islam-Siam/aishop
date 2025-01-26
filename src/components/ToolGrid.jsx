
import Image from 'next/image';
import blogHeadlinesIcon from '../../public/image 318.svg' 
import blogIntrosIcon from '../../public/image 319.svg' 
import blogOutlineIcon from '../../public/image 320.svg' 
import blogOutlineIcon2 from '../../public/image 321.svg' 

const tools = [
    { title: 'Blog Headlines', description: 'Write a better blog title with our AI tool.', icon: blogHeadlinesIcon },
    { title: 'Blog Intros', description: 'Generate a paragraph of blog content using Blog Intros tool', icon: blogIntrosIcon },
    { title: 'Blog Outline', description: 'Need an attention-grabbing headline for your article?', icon: blogOutlineIcon },
    { title: 'Blog Conclusions', description: 'Write a better conclusions with AI writing tool.', icon: blogHeadlinesIcon  },
    { title: 'Content Rewriter', description: 'Get AI writer to rewrite your sentence in a different way.', icon: blogOutlineIcon2  },
    { title: 'Product Description', description: 'Need an attention-grabbing headline for your article?', icon: blogIntrosIcon },
    { title: 'PAS Copywriting Formula', description: 'Get AI writer to rewrite your sentence in a different way.', icon:blogOutlineIcon  },
    { title: 'Company About Us', description: 'Write a better blog title with our AI tool.', icon: blogHeadlinesIcon  },
];

const ToolGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-black">
            {tools.map((tool, index) => (
                <div key={index} className="bg-[#1F2937] rounded-lg p-6 hover:bg-[#374151] transition duration-300">
                    <div className='flex gap-3'>
                    <Image src={tool.icon} alt={tool.title} className="w-8 h-8 mr-2" /> {/* Use tool.icon */}
                    <div className="flex flex-col">
                  
                    <h3 className="text-white inter-font font-semibold text-base mb-2">{tool.title}</h3>
                    <p className="text-gray-300 inter-font text-sm">{tool.description}</p>
                    </div>
                  
                    </div>
                </div>
            ))}
            <div className='w-full text-center mt-4'>
                <p className='text-gray-400 text-sm'>See all 54 available tools</p>
            </div>
        </div>
    );
};

export default ToolGrid;