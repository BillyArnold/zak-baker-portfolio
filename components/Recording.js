import CustomContainer from "./UI/Container"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Recording = () => {
    return (
        <>
            <div className="w-full flex-col-reverse md:flex md:flex-row md:items-center">

                <div className="w-full px-5 md:w-1/2 pb-20">
                <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
                    <Image src="/RecordingMixing.png" width="806" height="605" layout="responsive"/>
                    </motion.div>
                </div>

                <div className="w-full px-5 md:w-1/2 pb-20">
                <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .2 }}
            >
                    <h2 className="text-3xl  md:text-4xl mb-5">CLEARER SONICS <br/><span className="text-shapeshift">BETTER VISIBILITY</span></h2>
                    <p>Streaming services such as <span className="text-shapeshift">Apple Music</span>, TIDAL and more are favouring Dolby Atmos mixes for promotion and playlist placements. </p>
                    </motion.div>
                </div>
                        
               


            </div>
        </>
    )
}


export default Recording