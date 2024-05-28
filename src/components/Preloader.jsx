import {useAnimate} from '../utilities/useAnimate'

export const Preloader = () => {
  const  { message, loader, loader2, preloader} = useAnimate()
  return (
    <>
      <div className="container">
        <div
          ref={preloader}
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0%  100%)" }}
          className="pre-loader fixed top-0 w-full h-full"
        >
          <div
            ref={loader}
            className="loader absolute top-0 w-full h-full bg-[#131949] text-white flex justify-center items-center"
          ></div>
        </div>
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[400px] z-[2] text-white justify-center">
          <div className="text-[30px] uppercase leading-none">
            <p ref={message} className="text-center">Bienvenido</p>
          </div>
        </div>
        <div
          ref={loader2}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            background: "url('form_img.png') 50% 50%",
            backgroundColor: "#131949",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
          className="loader-2 absolute top-0 w-full h-full z-[-1] bg-[#131949]"
        ></div>
      </div>
    </>
  );
};
