import { useState } from "react";

    export const SuccessForm = ({setSuccessForm}) => {
  

    return (
        <>
            <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-black text-2xl font-black mb-8 text-center">
            ¡Gracias por tu sugerencia!
            </h1>

            <p className="text-center text-sm mb-10">Tu opinión es muy importante para nosotros. Hemos recibido tu mensaje y lo revisaremos cuidadosamente. Agradecemos tu tiempo y esfuerzo para ayudarnos a mejorar.</p>

            <button onClick={() => {setSuccessForm(false)}}>
              Regresar
            </button>
            </div>
           
        </>
    )
}