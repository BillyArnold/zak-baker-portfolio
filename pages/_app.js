import "../styles/globals.css";
import { motion } from "framer-motion";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "AW-10982415924" });
  }, []);

  return (
    <>
      <Component {...pageProps} />

      <motion.div
        key={router.route}
        transition={{ duration: 2 }}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 1,
          },
          pageAnimate: {
            opacity: 0,
          },
          pageExit: {
            opacity: 1,
          },
        }}
      >
        <div className="exit-animate touch-none pointer-events-none bg-mainDark fixed h-screen w-screen left-0 top-0"></div>
      </motion.div>
    </>
  );
}

export default MyApp;
