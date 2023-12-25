'use client'
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];


import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const Nav = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
  <nav className='flex gap-4 fixed h-max bottom-0 
  xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen
  mt-auto flex-col items-center xl:justify-center'>
  <div className='flex w-full lg:flex-col items-center justify-between xl:justify-center gap-y-10
  px-4 md:px-40 xl:px-0 h-[85px] 
  xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
  {navData.map((navbar, index) => {
    return (
      <Link className={`${navbar.path === pathname && 'text-accent'} relative flex items-start transition-all duration-300  hover:text-accent group`} href={navbar.path} key={index}>
       
        {/* tooltip */}
        <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
        <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
        <div className='text-[12px] leading-none font-semibold capitalize'>{navbar.name}</div>
       
       {/* triangle */}
       <div className='border-solid border-l-white borde-l-8 border-y-transparent border-y-[6px] border-0 absolute -right-2'>

       </div>
        </div>
        </div>
        <div className= ''>
        {navbar.icon}
        </div>
      </Link>
    )
  })}
  </div>
  <ThemeToggle />
  </nav>
)};

export default Nav;
