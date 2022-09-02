import { motion } from "framer-motion";

const FeaturedText = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="text-center pb-20">
          <h2 className="font-medium text-3xl  md:text-4xl">
            <span className="text-shapeshift">Passionate</span> about pushing
            boundaries in all aspects of music production.
          </h2>
        </div>
      </motion.div>
    </>
  );
};

export default FeaturedText;
