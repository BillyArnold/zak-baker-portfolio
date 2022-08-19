import { motion } from "framer-motion"

const Contact = () => {
    return (
        <>
            <div className="flex flex-col relative justify-center w-full font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl pb-20">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
                <div className="text-2xl text-right font-medium md:text-4xl mb-20">
                    Want to work with me?
                </div>
                </motion.div>

                <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
                <div className="text-3xl font-medium md:text-4xl mb-5 ">
                    Send me a message
                </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
                <div className="cursor-pointer" onClick={ () => {window.open("mailto:hello@zakbaker.co.uk")}}>
                    HELLO@ZAK
                </div>
                </motion.div>
                <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
                <div className="cursor-pointer text-shapeshift" onClick={ () => {window.open("mailto:hello@zakbaker.co.uk")}}>
                    BAKER.CO.UK
                </div>
            </motion.div>
            </div>
        </>
    )
}

export default Contact