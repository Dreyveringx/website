import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Socials } from '../utils/helper';
import { HomeSocialLinks } from '../components';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start mt-32"> 
        <p className="text-3xl tracking-wide text-texlight"> Jair Uribe</p>
        <div className="flex items-center justify-center gap-16 mt-16">
        <AnimatePresence>
            {Socials && Socials.map((item, index) => (
              <HomeSocialLinks key={index} data={item} index={index} />
            ))}
          </AnimatePresence>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-3 mt-10'>
            <p className='text-texlight text-center'>
                xdreyveringx@hotmail.com
            </p>
            <p className='text-texlight text-center'>+57 318 286 0380</p>
            <a href = "#">
                <p className='text-primary text-center'>Hire Me</p>
            </a>
        </div>
    </div>
  )
}

export default Footer;

