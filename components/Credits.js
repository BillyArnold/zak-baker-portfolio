import CustomContainer from "./UI/Container"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Credits = () => {
    const creditScrollRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#creditArea", {
          x: "-60%",
          duration: 5,
          scrollTrigger: {
            trigger: "#creditArea",
            markers: false,
            start: "top 75%", 
            end: "bottom top",
            scrub: 1
          }
        });
      }, []);

    return (
        <>
            <div className="w-full pb-20">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
                <h2 className="text-shapeshift font-black text-3xl md:text-5xl">CREDITS</h2><br/>
                </motion.div>
                <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .2 }}
            >
                <p><span className="text-shapeshift">Take a look below</span> at some of the projects i’ve worked on...</p><br/>
                </motion.div>
            
               
                <div id="creditArea" ref={creditScrollRef} className="credits overflow-visible whitespace-nowrap pb-8">
                    <div className="credit w-2/5 mr-10 inline-block">
                        <Image src="/Jungle.jpg" width="100%" height="100%" layout="responsive"/>
                    </div>
                    <div className="credit w-2/5 mr-10 inline-block">
                        <Image src="/GlassAnimals.jpg" width="100%" height="100%" layout="responsive"/>
                    </div>
                    <div className="credit w-2/5 mr-10 inline-block">
                        <Image src="/YouMeAtSix.jpg" width="100%" height="100%" layout="responsive"/>
                    </div>
                    <div className="credit w-2/5 mr-10 inline-block">
                        <Image src="/Brockhampton.jpeg" width="100%" height="100%" layout="responsive"/>
                    </div>
                </div>
               

                <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            > 
                <Link href="/credits">
                    <div className="font-medium text-shapeshift underline underline-offset-8 cursor-pointer text-3xl  md:text-4xl">
                        SEE THE REST <span className="text-white">-></span>
                    </div>
                </Link>
            </motion.div>
            </div>
        </>
    )
}


export default Credits