import Image from "next/image"
import { useRef, useEffect } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



const Phones = (props) => {
    const phoneScrollRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#phoneFirst", {
          y: -75,
          duration: 5,
          scrollTrigger: {
            trigger: "#phones",
            markers: false,
            start: "top 75%", 
            end: "bottom top",
            scrub: 1
          }
        });

        gsap.to("#phoneSecond", {
            y: 75,
            duration: 5,
            scrollTrigger: {
              trigger: "#phones",
              markers: false,
              start: "top 75%", 
              end: "bottom top",
              scrub: 1
            }
          });
      }, []);

    return(
        <>
            <div ref={phoneScrollRef} id="phones" className="w-full min-h-[40vh] md:min-h-[50vh] relative">

                <div id="phoneFirst" className="absolute left-0 bottom-0 w-2/5">
                    <Image src="/dolbyiphone.png" width="466" height="938" layout="responsive"/>
                </div>
                
                <div id="phoneSecond" className="absolute right-0 top-0 w-2/5">
                    <Image src="/spacialiphone.png" width="466" height="938" layout="responsive"/>
                </div>
            </div>
        </>
    )
}

export default Phones