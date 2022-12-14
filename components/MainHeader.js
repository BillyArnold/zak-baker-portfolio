import { motion } from "framer-motion";

const MainHeader = () => {
  return (
    <>
      <div className="main-header bg-[url('/zakheader.png')] bg-no-repeat bg-cover md:bg-right-top h-[70vh] md:h-[90vh] w-full flex items-center flex-col justify-end mb-20">
        <div className="max-w-7xl w-full px-5 mx-auto pb-10 sm:pb-24 lg:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-shapeshift font-bold text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              ZAK
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div className="text-white font-bold text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              BAKER
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
