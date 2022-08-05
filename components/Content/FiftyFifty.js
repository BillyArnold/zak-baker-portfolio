import { motion } from "framer-motion"

const FiftyFifty = () => {
    return (
        <>
            
            <div className="md:flex w-full">
                <div className="w-full md:w-1/2 md:pr-5 pb-20 ">
                <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .2 }}
            >
                <p>Currently the in-house engineer at <span className="text-shapeshift">Blue Bell Hill Studios</span> in the Kent countryside, I have worked with artists including <span className="text-shapeshift">Jungle</span>, Glass Animals, <span className="text-shapeshift">Skepta</span>, Louis Tomlinson, <span className="text-shapeshift">J Hus</span>, You Me At Six and countless more.</p>
                </motion.div>
                </div>
                <div className="w-full md:w-1/2 md:pl-5 pb-20 ">
                <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .4 }}
            >
                <p>Passionate about pushing boundaries and working collaboratively. I am available for <span className="text-shapeshift">mixing in both stereo and Dolby Atmos</span>. I also specialise in immersive recording techniques that elevate <span className="text-shapeshift">spatial audio mixes</span> beyond standard stereo practices.</p>
                </motion.div>
                </div>
            </div>
            
        </>
    )
}


export default FiftyFifty