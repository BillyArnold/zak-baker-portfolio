import CustomContainer from "./UI/Container"
import Image from "next/image"
import Link from "next/link"
import Drawer from "./UI/Drawer"
import { motion } from "framer-motion"

const OtherServices = () => {

    return (
        <>
            <div className="w-full pb-20">
            <div className="w-full text-right">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
            <h2 className="font-black text-3xl md:text-5xl pb-20">OTHER SERVICES</h2>
            </motion.div>
            </div>
           
            <div className="drawers">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
                <Drawer className="w-full block" heading="MIXING">
                    <p>I’ve been fortunate to have worked my entire career in studios with large format mixing consoles, analogue outboard and high-end plugins. Currently I am mixing out of Blue Bell Hill Studios in Kent with an acoustically designed control room and SSL G series desk. Please get in contact with the email at the bottom of this page, so we can discuss your project.
</p>
                </Drawer>
                </motion.div>


                <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .2 }}
            >
                <Drawer className="w-full block" heading="ENGINEERING">
                    <p>Whether it&apos;s full band recordings or vocal sessions. The recording is the foundation for your song&apos;s sound, a great recording is vital for a powerful mix. As someone that works frequently with the Dolby Atmos format, I am also equipped with spatial audio recording techniques for recordings to get the most out of the immersive mixing formats.
<br/><br/>
I am both available as the in-house engineer at Blue Bell Hill Studios in Kent for recording, as well as freelance engineering jobs. Please get in contact with the email at the bottom of this page to discuss your project and availability.
</p>
                </Drawer>
                </motion.div>

            
                <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .4 }}
            >
                <Drawer className="w-full block" heading="PRODUCTION">
                    <p>The production is a very important part of any song, it&apos;s what gives the track its identity through its feel and sonic characteristics. If you&apos;re in need of song arrangement or sonic direction for either a single track or a larger project, please get in touch with the email below to discuss your project.
</p>
                </Drawer>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: .6 }}
            >
                <Drawer className="w-full block" heading="EDITING">
                    <p>Track time alignment for both instrumental tracks and vocal tracks. Discreet pitch correction with Melodyne. If you feel they are required, can be very crucial steps to getting your song to make the leap to sounding professional. If your track needs extensive editing before the mix stage, please get in touch with the email below. If you&apos;re unsure if you need extensive editing, mention it anyway and we can figure out if it&apos;s needed.
</p>
                </Drawer>
                </motion.div>
            </div>
                        
               


            </div>
        </>
    )
}


export default OtherServices