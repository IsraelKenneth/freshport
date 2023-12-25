import ParticlesContainer from '@/components/ParticlesContainer';
import ProjectsBtn from '@/components/ProjectsBtn';
import { New } from '@/public';
import { heroimg } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { styles } from '@/styles';

export default function Home() {
  return (
    <div className='relative w-full h-screen mx-auto flex sm:flex-row flex-col-reverse'>
    <div className={`sm:px-16 px-6 flex-1 flex-col mx-auto my-auto `}>
        <div className={`flex-1 w-full mt-[5rem] flex flex-row justify-center items-start gap-5`}>
            <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#3d5a80]' />
                <div className='w-1 sm:h-80 h-40 violet-gradient ' />
            </div>
            <div>
                <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 dark:text-white text-[#4a4a92] drop-shadow-lg`}> Think. Make. <span className='dark:text-[#3d5a80] text-black'> Solve.</span></h1>
                <p className={`font-medium lg:text-[30px] sm:text-[22px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 dark:text-white-100 text-[#7272cb] drop-shadow-lg `}> I am a Photographer, UI/UX, 3D visuals designer & A Web developer</p>
                <br />
                <div className='sm:mt-[1rem] mt-[1px]' >
                    <p className={`font-black lg:text-[47px] sm:text-[40px] xs:text-[28px] text-[20px] lg:leading-[70px] text-[#3d5a80] drop-shadow-lg`}>DE <br className='md:block hidden' /> <span className='font-black px-2 mx-1 text-black bg-white '>SIGN</span> <span className='font-medium sm:text-[2.5rem] text-[1rem] text-white'>with me.</span></p>
                    <Link href="contact">
                        <button className={`${styles.heroSubText} relative sm:my-[2rem] my-3  text-white drop-shadow-lg bg-[#4a4a92] hover:bg-[#2b2b5a] dark:hover:bg-white hover:text-white dark:hover:text-black font-bold py-2 px-4 rounded cursor-pointer z-10 ease`}>Contact Me</button>
                    </Link>
                </div>
            </div>
        </div>

    </div>

    <div className='flex relative flex-1 w-full  items-center justify-center'>
    <ParticlesContainer />
        <Image className='w-[70%] anim-3d ' src={heroimg} alt='vinci-designs' />
    
    </div>


</div>

    
  );
}
