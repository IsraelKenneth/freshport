// 'use client'

// import { Layout } from '@/components';

import RootLayout from './layout';

import '../styles/globals.css'
import { useRouter } from 'next/router';


import { AnimatePresence, motion } from 'framer-motion'

import Transition from '@/components/Transition';

const App = ({Component, pageProps}) =>{
  const router = useRouter()
  return(
    <RootLayout>

    <AnimatePresence mode='wait'>
     <motion.div key={router.route} className='h-full'>
       <Transition />
       </motion.div>

    <Component {...pageProps} />
    </AnimatePresence>
    </RootLayout>
)}

export default App;



// export default function Home() {
// const router = useRouter()
//   return (
//     <Layout>
//     <AnimatePresence mode='wait'>

//     <div>
//     <motion.div key={router.route} className='h-full'>
//       <Transition />
//       </motion.div>
//     </div>
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     hey
//     </main>
//     </AnimatePresence>
//     </Layout>
//   )
// }
