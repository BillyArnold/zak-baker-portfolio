import Image from "next/image"
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
    hover: {
      opacity: 1
    },
    initial: {
      opacity: 0
    }
  };


const SingleCredit = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }
    
    function handleMouseLeave() {
        setIsHovered(false);
    }

    const classes = "w-full sm:w-1/2 lg:w-1/3 relative mb-10 px-2 text-center" + props.className;
    return (
        <>
        
        <div className={classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
            <div className="relative">
                <Image src={props.src} width="500" height="500" layout="responsive"/>
                <motion.div
              variants={variants}
              animate={isHovered ? "hover" : "initial"}
              transition={{ duration: .3 }}
            >
                <div className="text-base credit-desc text-center absolute bottom-0 left-0 top-0 right-0 w-full h-full flex flex-col items-center justify-center bg-mainDark/90 border-0 border-white p-2">
                    {props.children}
                </div>
            </motion.div>
            </div>
            </motion.div>
        </div>
        </>
    )
}

export default SingleCredit