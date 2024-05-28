import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


export const useAnimate = () => {
    gsap.registerPlugin(useGSAP);

    const message = useRef();
    const preloader = useRef();
    const loader = useRef();
    const loaderBg = useRef();
    const loader2 = useRef();
    const page = useRef();
  
    useGSAP(() => {
      gsap.to(message.current, {
        opacity: 0,
        delay: 0.1, // adjusted to fit within 1.5 seconds
        duration: 0.2 // adjusted duration
      });
  
      gsap.to(preloader.current, {
        scale: 0.5,
        ease: "power4.inOut",
        duration: 0.3, // adjusted duration
        delay: 0.3 // adjusted delay
      });
  
      gsap.to(loader.current, {
        height: "0",
        ease: "power4.inOut",
        duration: 0.3, // adjusted duration
        delay: 0.6 // adjusted delay
      });
  
      gsap.to(loader2.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        duration: 0.6, // slightly extended duration
        delay: 0.7 // adjusted delay
      });
  
      gsap.to(page.current, {
        zIndex: "2",
        ease: "power4.inOut",
        duration: 0.3, // adjusted duration
        delay: 1.2 // adjusted delay
      });
   
  

  
});


    return {message, preloader, loader, loaderBg, loader2, page}
}


