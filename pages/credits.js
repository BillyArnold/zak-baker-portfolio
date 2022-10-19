import Head from "next/head";
import FixedHeader from "../components/FixedHeader";
import CustomContainer from "../components/UI/Container";
import Contact from "../components/Contact";
import InnerHeader from "../components/Content/InnerHeader";
import CreditList from "../components/CreditList";

import { ScrollerMotion } from "scroller-motion";

export default function CreditsPage() {
  return (
    <ScrollerMotion>
      <div className="bg-mainDark font-termina text-white font-medium text-lg md:text-2xl overflow-hidden">
        <Head>
          <title>Zak Baker - Credits</title>
          <meta
            name="description"
            content="Engineering and Mix Engineering Credits"
          />
          <link rel="icon" href="/favicon.png" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-10982415924"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'AW-10982415924');`,
            }}
          />
        </Head>

        <FixedHeader />

        <CustomContainer>
          <InnerHeader>CREDITS</InnerHeader>

          <CreditList />

          <Contact />
        </CustomContainer>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('click',function(event){
                var text = event.target.innerText.trim()
                if(text.indexOf('HELLO@ZAK')!=-1 || text.indexOf('BAKER.CO.UK')!=-1){
                gtag('event', 'conversion', {'send_to': 'AW-10982415924/urErCLyH1OMDELS86fQo'});
                }
                
              });`,
        }}
      />
    </ScrollerMotion>
  );
}
