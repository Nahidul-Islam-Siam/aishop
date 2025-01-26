
import blogHeadlinesIcon from './assets/blog-headlines.svg'; // Import your icons
import blogIntrosIcon from './assets/blog-intros.svg';
import blogOutlineIcon from './assets/blog-outline.svg';
import blogConclusionsIcon from './assets/blog-conclusions.svg';
import contentRewriterIcon from './assets/content-rewriter.svg';
import productDescriptionIcon from './assets/product-description.svg';
import pasCopywritingIcon from './assets/pas-copywriting.svg';
import companyAboutUsIcon from './assets/company-about-us.svg';

const tools = [
    { title: 'Blog Headlines', description: 'Write a better blog title with our AI tool.', icon: blogHeadlinesIcon },
    { title: 'Blog Intros', description: 'Generate a paragraph of blog content using Blog Intros tool', icon: blogIntrosIcon },
    { title: 'Blog Outline', description: 'Need an attention-grabbing headline for your article?', icon: blogOutlineIcon },
    { title: 'Blog Conclusions', description: 'Write a better conclusions with AI writing tool.', icon: blogConclusionsIcon },
    { title: 'Content Rewriter', description: 'Get AI writer to rewrite your sentence in a different way.', icon: contentRewriterIcon },
    { title: 'Product Description', description: 'Need an attention-grabbing headline for your article?', icon: productDescriptionIcon },
    { title: 'PAS Copywriting Formula', description: 'Get AI writer to rewrite your sentence in a different way.', icon: pasCopywritingIcon },
    { title: 'Company About Us', description: 'Write a better blog title with our AI tool.', icon: companyAboutUsIcon },
];

const ToolGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#111827]">
            {tools.map((tool, index) => (
                <div key={index} className="bg-[#1F2937] rounded-lg p-6 hover:bg-[#374151] transition duration-300">
                    <div className="flex items-center mb-4">
                        <img src={tool.icon} alt={tool.title} className="w-6 h-6 mr-2" /> {/* Use tool.icon */}
                        <h3 className="text-white font-medium">{tool.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>
            ))}
            <div className='w-full text-center mt-4'>
                <p className='text-gray-400 text-sm'>See all 54 available tools</p>
            </div>
        </div>
    );
};

export default ToolGrid;