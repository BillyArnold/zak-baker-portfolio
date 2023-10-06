import { motion } from "framer-motion";

const FiftyFifty = () => {
  return (
    <>
      <div className="md:flex w-full">
        <div className="w-full md:w-1/2 md:pr-5 pb-10 md:pb-20 ">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p>
              Freelance recording and mixing engineer currently residing in{" "}
              <span className="text-shapeshift">Sydney, Australia.</span> Having
              worked previously as the in-house engineer at Blue Bell Hill
              Studios in the UK, I have worked with artists including{" "}
              <span className="text-shapeshift">The Kooks</span>,
              PinkPantheress, Jungle,{" "}
              <span className="text-shapeshift">Glass Animals</span>, Skepta,
              Louis Tomlinson, J Hus,{" "}
              <span className="text-shapeshift">Nothing But Thieves</span> and
              countless more.
            </p>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 md:pl-5 pb-20 ">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p>
              Passionate about pushing boundaries and working collaboratively. I
              am available for{" "}
              <span className="text-shapeshift">
                mixing in both stereo and Dolby Atmos
              </span>
              . I also specialise in immersive recording techniques that elevate{" "}
              <span className="text-shapeshift">spatial audio mixes</span>{" "}
              beyond standard stereo practices.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FiftyFifty;
