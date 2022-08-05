import CustomContainer from "./UI/Container"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Editing = () => {
    return (
        <>
            <div className="w-full flex-col-reverse md:flex md:flex-row-reverse md:items-center">

                <div className="w-full px-5 md:w-1/2 pb-20">
                <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
                    <Image src="/Editing.png" width="1200" height="900" layout="responsive"/>
                    </motion.div>
                </div>

                <div className="w-full px-5 md:w-1/2 pb-20">
                <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .2 }}
            >
                    <h2 className="text-3xl  md:text-4xl mb-5">FROM STEREO<br/><span className="text-shapeshift">TO ATMOS</span></h2>
                    <p>
                    Work from your existing stereo mix multitracks or stems, and open up your songs to another level of <span className="text-shapeshift">space, clarity and depth</span>.
                    </p>
                    </motion.div>
                </div>
                        
               


            </div>
        </>
    )
}


export default Editing