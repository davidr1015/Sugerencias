import { useState } from "react";

    export const Form = ({setSuccessForm}) => {
    const [nombre, setNombre] = useState("");
    const [sugerencia, setSugerencia] = useState("");
  
    // URL para la API de Google Sheets
    const URL = `https://sheet.best/api/sheets/9cc36625-fd80-490a-94bd-a309efbf50ce`;
  
    const handleSend = async (e) => {
      e.preventDefault();
  
      fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Nombres: nombre, 
            Sugerencia: sugerencia, 
            Fecha: new Date().toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }) 

        })
      }
  
      )
  
      setNombre('');
      setSugerencia('');
      setSuccessForm(true)
    };
    return (
        <>
            <div className="flex flex-col justify-center h-full">
            <h1 className="text-black text-2xl font-black mb-12">
              Bienvenido al Buzón de Sugerencias
            </h1>
            <form
              action=""
              method="post"
              onSubmit={handleSend}
              className="flex flex-col gap-4"
            >
              <label htmlFor="" className="flex flex-col gap-1 font-semibold">
                Hola, Cual es tu nombre?
                <input
                  className="border border-gray-400 outline-blue-400 rounded-md w-64 py-3 px-4 text-xs font-semibold placeholder:text-gray-500"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Opcional"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-1 font-semibold">
                Ayúdanos a mejorar. Envía tus sugerencias
                <textarea
                  className="border border-gray-400 outline-blue-400 rounded-md w-full py-3 px-4 h-36 text-xs font-semibold placeholder:text-gray-500 resize-none"
                  value={sugerencia}
                  onChange={(e) => setSugerencia(e.target.value)}
                  required
                ></textarea>
              </label>

              <div className="flex justify-end  ">
                <button className="w-min px-4 rounded-lg py-1 text-blue-300 font-bold">
                  Enviar
                </button>
              </div>
            </form>
            </div>
        </>
    )
}