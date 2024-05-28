import { useEffect, useRef, useState } from "react";
import { Background } from "./Background";
import { Form } from "./Form";
import { SuccessForm } from "./SuccessForm";

export const PrincipalPage = () => {
  const [successForm, setSuccessForm] = useState(false);

  return (
    <main className=" w-full h-[100vh]  md:overflow-hidden max-w-[1100px] mx-auto">
      <Background />

      <header className="h-12 w-full flex justify-start relative  p-6 mb-12 md:mb-4">
        <a href="" className="h-16 overflow-hidden">
          <img src="logo.webp" alt="logo de cidetic" className="max-h-full" />
        </a>
      </header>

      <section className="relative mx-auto  px-5 max-w-3xl h-full flex flex-col items-center justify-center">


        <article className="rounded-xl z-20 flex  flex-col sm:flex-row lg:h-[600px] overflow-hidden">
          <div className="flex-1 bg-blue-600/80  overflow-hidden relative ">
            <div
              style={{
                borderRadius: " 43% 59% 58% 50% / 69% 32% 71% 31%",
                height: "20vh",
                width: "45vh",
              }}
              className="absolute w-32 h-32 bg-blue-800 right-0 left-0 bottom-4 "
            />
            <img
              src="form_img.png"
              alt=""
              className="h-full w-full object-cover z-10 relative object-top"
            />
          </div>
          <div className="flex-1 bg-white p-6">
            {successForm ? <SuccessForm setSuccessForm={setSuccessForm} /> : <Form  setSuccessForm={setSuccessForm}/>}
          </div>
        </article>


      </section>
    </main>
  );
};
