import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [isHoverred, setIsHoverred] = useState(false);
  return (
    <div className="w-full flex flex-col items-center justify-start mt-32">
      <p className="text-3xl tracking-wide text-texlight"> Jair Uribe</p>
      <div className="flex items-center justify-center gap-16 mt-5">
        <AnimatePresence>
          {Socials &&
            Socials.map((item, index) => (
              <HomeSocialLinks key={index} data={item} index={index} />
            ))}
        </AnimatePresence>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-3 mt-10">
        <p className="text-texlight text-center">xdreyveringx@hotmail.com</p>
        <p className="text-texlight text-center">+57 310 425 7781</p>

        <motion.a
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[2px] cursor-pointer mt-10"
          onMouseEnter={() => setIsHoverred(true)}
          onMouseLeave={() => setIsHoverred(false)}
        >
          <AnimatePresence>
            {isHoverred && (
              <motion.div
                className={
                  "absolute inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10"
                }
              ></motion.div>
            )}
            <a href="#">
              <div className="w-full h-full rounded-full bg-bgPrimary flex items-center justify-center">
                <IoIosArrowUp className={"text-texlight"} />
              </div>
            </a>
          </AnimatePresence>
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
