import { motion } from "framer-motion";

const DrawerContent = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleY: 1 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="w-full pt-0 pb-10 transition-all">{props.content}</div>
      </motion.div>
    </>
  );
};

export default DrawerContent;
