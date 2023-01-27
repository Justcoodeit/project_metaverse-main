'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Fixie" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Fixie </span> 
        the ultimate online platform for connecting users with skilled labor and service providers.
         Our mission is to provide excellent on-demand services to users and gig opportunities to  {' '}
         <span className="font-extrabold text-white">
          artisans 
          </span>{' '}
           in the simplest, 
         most efficient, and shortest time possible. Whether you're a homeowner looking for a handyman, a contractor searching for skilled labor,
          or an artisan looking for gig opportunities, Fixie has you covered. Our platform makes 
          it easy to find the right people for all your projects and get a great service delivered.
         With Fixie, you can rest   <span className="font-extrabold text-white"> assured </span> 
         that you'll get the job        <span className="font-extrabold text-white"> done </span> right and on time.
        {' '}
  

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
