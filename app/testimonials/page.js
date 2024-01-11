
import { MotionWrap, AppWrap } from '@/wrapper';
import { client } from '@/sanity/lib/client';
import { urlForImage as urlFor } from '@/sanity/lib/image';

// const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
//   const imageUrl = urlFor(image);
// (
//     <div
//         className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
//     >
//         <p className='text-white font-black text-[48px]'>"</p>

//         <div className='mt-1'>
//             <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//             <div className='mt-7 flex justify-between items-center gap-1'>
//                 <div className='flex-1 flex flex-col'>
//                     <p className='text-white font-medium text-[16px]'>
//                         <span className='blue-text-gradient'>@</span> {name}
//                     </p>
//                     <p className='mt-1 text-secondary text-[12px]'>
//                         {designation} of {company}
//                     </p>
//                 </div>

//                 <img
//                     src={imageUrl}
//                     alt={`feedback_by-${name}`}
//                     className='w-10 h-10 rounded-full object-cover'
//                 />
//             </div>
//         </div>
//     </div>
// )
// }


// const Testimonial = () => {

//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//           // Fetching projects for webdev
//     client.fetch('*[_type == "testimonial"]').then((data) => {
//       setTestimonials(data);
//       console.log(data)
//     });
//   }, []);
//     return (
//         <>
//             <div>
//                 <p className={``}>What others have to say</p>
//                 <h2 className={``}>Testimonials.</h2>
//             </div>

//             <div className='mt-20 flex flex-wrap gap-7'>
//                 {testimonials.map((testimonial, index) => (
//                     <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//                 ))}

//             </div>
//         </>
//     )
// }

// export default AppWrap(MotionWrap(Testimonial),'testimonial',);

