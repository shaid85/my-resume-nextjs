"use client"
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import TopLeftImg from '@/components/TopLeftImg';
import {Sora} from 'next/font/google';
import {AnimatePresence, motion} from 'framer-motion';
import Transition from '@/components/Transition';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from '@/components/ThemeProvider';

// font setting
const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    weight: ['100','200','300','400','500','600','700','800']
})

export default function RootLayout({
    children
  }) {

    const pathname = usePathname()
    return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <TopLeftImg />
        <Nav />
        <Header />
        {/* <AnimatePresence mode='wait'> */}
           {/* <motion.div key={pathname} className='h-full'> */}
             {/* <Transition /> */}
             {children}    
           {/* </motion.div> */}
        {/* </AnimatePresence> */}
      </ThemeProvider>   
    </div>    
  )
}