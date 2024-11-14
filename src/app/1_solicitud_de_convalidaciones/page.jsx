import Image from "next/image";
import Nav from "@/components/nav";
import Titulo from "@/components/titulo";

export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <>
      <div className="m-4">
        <Titulo> Solicitud de convalidaciones </Titulo>
        <div className="flex justify-center">
          <div className="bg-blue-200 rounded-2xl p-4 w-[95%]">
            <p>
              Aquí encontrarás información acerca de cómo solicitar la convalidación de un módulo profesional y la exención del módulo de Formación en Centros de Trabajo.
            </p>
            <div className="flex justify-center">
              <img src="/balanza.png" alt="" className="w-1/5" />
            </div>
          </div>
        </div>
        <Nav pos={1} />
      </div>
    </>
  );
}