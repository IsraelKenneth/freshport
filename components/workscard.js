import { urlForImage as urlFor } from '@/sanity/lib/image';

export const  ProjectCard = ({
    index,
    title,
    description,
    projectLink,
    codeLink,
    imgUrl,
    tags,
}) => {
    const imageUrl = urlFor(imgUrl);
    return (
        
        <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
            <div onClick={() => window.open(codeLink, "_blank")} className='relative w-full h-[230px] cursor-pointer'>
                <img
                    src={imageUrl} // Assuming imgUrl is an object with an asset property containing the URL
                    alt={title}
                    className='w-full h-full object-cover rounded-2xl'
                />

                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                    <div onClick={() => window.open(codeLink, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                        <img
                            src={imageUrl} // You can replace this with your desired source image URL or remove it
                            alt='source code'
                            className='w-1/2 h-1/2 object-contain'
                        />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{title}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>

            {/* Displaying tags. Modify this section based on how your tags are structured */}
            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag, index) => (
                    <p key={`${title}-${index}`} className='text-[14px] bg-gray-200 p-1 rounded mr-1'>
                        #{tag}
                    </p>
                ))}
            </div>
        </div>
    );
};
