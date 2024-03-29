"use client"
import ProjectsBtn from '@/components/ProjectsBtn';
import {motion} from 'framer-motion';
import { fadeIn } from '../../../variants';
import Avatar from '@/components/Avatar';
import ParticlesContainer from '@/components/ParticlesContainer';

const Home = () => {
  return (
    <div className=' bg-primary/60 h-full'>
      {/* text */}
      <div className=' w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-20'>
        <div className=' text-center flex flex-col justify-center xl:pt-32 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1 
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'          
          className="h1">
            Crafting Ideas <br/> Into{' '}
            <span className=' text-accent'>Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p 
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-12'>
           Greetings, I am Syeed, a seasoned web developer with an extensive 10+ year journey in the world of web technologies. Proficient in ReactJS, Redux, NextJs, WordPress, HTML5, CSS3, Bootstap, Tailwindcss

          </motion.p>
          {/* btn */}
          <div className=" flex justify-center xl:hidden relative mt-6">
            <ProjectsBtn />
          </div>
          <motion.div 
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=' hidden xl:flex mt-6'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className=" w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-x-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className=' w-full h-full max-w-[650px] max-h-[650px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
};

export default Home;
