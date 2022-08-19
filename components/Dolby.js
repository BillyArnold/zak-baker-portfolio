import CustomContainer from "./UI/Container"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Dolby = () => {
    return (
        <>
            <div className="w-full pb-20">
                <div className="text-center">
                <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            > 
                <h2 className="text-white font-black text-3xl md:text-5xl mb-20">DOLBY ATMOS <span className="text-shapeshift">FOR MUSIC</span></h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            > 
                <p className="text-white font-medium mb-10">Dolby Atmos mixes you can trust...</p>
            </motion.div>
                <div className="w-full flex flex-col md:flex-row text-shapeshift justify-center items-center">
                    <div className="text-center w-full md:w-1/3 mb-10 md:mb-20">
                    <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .2 }}
            > 
                        <p>Dolby Certified <br/>Studio</p>
                        </motion.div>
                    </div>
                    <div className="text-center w-full md:w-1/3 mb-10 md:mb-20">
                    <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .4 }}
            > 
                        <p>Full UMG <br/>Deliverables</p>
                        </motion.div>
                    </div>
                    <div className="text-center w-full md:w-1/3 mb-10 md:mb-20">
                    <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .6 }}
            > 
                        <p>Dolby Atmos <br/> Album Assembly</p>
                        </motion.div>
                    </div>
                </div>
                <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .8 }}
            > 
                <div className="w-full md:w-[90%] mx-auto flex flex-col items-center">
                    <div className="w-full md:w-4/5 text-center   mb-10">
                        <p>Blue Bell Hill Studios is equipped with a 7.1.4 Dolby Atmos setup which is officially certified and calibrated by Dolby.</p>
                    </div>
                    <div className="max-w-[100px] md:max-w-[unset] w-full md:px-0 md:w-1/6">
                        <Image src="/dolby.png" width="379" height="143" layout="responsive"/>
                    </div>
                </div>
                </motion.div>

                </div>
                

            </div>
        </>
    )
}


export default Dolby