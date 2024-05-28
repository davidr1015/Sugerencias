import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { PrincipalPage } from "./components/PrincipalPage";
import { Preloader } from "./components/Preloader";
import { useAnimate } from "./utilities/useAnimate";


function App() {
  const {page} = useAnimate()

  return (
    <>
     <Preloader/>
     
     <div ref={page} className=" relative z-[-2]">
      <PrincipalPage/>
     </div>
    </>
  );
}

export default App;
