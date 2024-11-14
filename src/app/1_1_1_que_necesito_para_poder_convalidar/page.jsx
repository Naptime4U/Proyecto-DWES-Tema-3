import Image from "next/image";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <>
      <div className="m-4">
        <Titulo>¿Qué necesito para poder convalidar?</Titulo>
        <div className="bg-blue-200 rounded-2xl p-4 m-4">
          <div>
            <p>La primera condición:</p>
            <div className="pl-10">
            <ul>
              <li className="relative pl-6 text-justify before:content-['✓'] before:text-green-500 before:absolute before:left-0">Si eres alumno de SEMI o distancia: <strong>estar matriculado/a en el módulo que se desea convalidar </strong>y realizar el pago de las tasas correspondientes. Hasta que no se realice y se compruebe el pago, no se podrá ejecutar la convalidación en el expediente<strong>. </strong>De esta forma, si el pago se retrasa cabría la posibilidad de que la resolución de la convalidación también se retrasara.</li>
            </ul>
            </div>
            <p>La <strong>convalidación no se realiza sobre la globalidad del Título</strong> que se está cursando, sino sobre los módulos que se soliciten, si estos cumplen las condiciones para ello.</p>
          </div>
        </div>
        <Nav pos={3} />
      </div>
    </>
  );
}