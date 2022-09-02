import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainHeader from "../components/MainHeader";
import FixedHeader from "../components/FixedHeader";
import FeaturedText from "../components/Content/FeaturedText";
import CustomContainer from "../components/UI/Container";
import FiftyFifty from "../components/Content/FiftyFifty";
import Credits from "../components/Credits";
import Spacer from "../components/UI/Spacer";
import Dolby from "../components/Dolby";
import Recording from "../components/Recording";
import Editing from "../components/Editing";
import OtherServices from "../components/OtherServices";
import Contact from "../components/Contact";
import { ScrollerMotion } from "scroller-motion";

export default function Home() {
  return (
    <ScrollerMotion>
      <div className="bg-mainDark font-termina font-medium text-white text-lg md:text-2xl overflow-hidden">
        <Head>
          <title>Zak Baker</title>
          <meta
            name="description"
            content="Engineering and Mix Engineering with Dolby Atmos"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <FixedHeader />
        <MainHeader />

        <CustomContainer>
          <FiftyFifty />

          <Spacer />

          <Credits />

          <Spacer />

          <Dolby />

          <Spacer />

          <Recording />
          <Editing />

          <Spacer />

          <OtherServices />

          <Contact />
        </CustomContainer>
      </div>
    </ScrollerMotion>
  );
}
