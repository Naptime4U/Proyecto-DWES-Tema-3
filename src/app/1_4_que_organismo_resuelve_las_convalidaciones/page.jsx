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
        <Titulo>¿Qué organismo resuelve las convalidaciones?s</Titulo>
        <div className="text-justify">
          <p className="mb-4">Las convalidaciones recogidas expresamente en los <strong>diferentes Anexos </strong><span><strong>del </strong></span><a className="underline text-blue-500 hover:text-blue-700 hover:no-underline" href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-17274" target="_blank" title="RD 1085/2020, de 9 de diciembre" rel="noopener"><span><strong>RD 1085/2020, de 9 de diciembre</strong></span></a> las resuelve la dirección del centro donde esté matriculado el alumno/a. Se <strong>resolverá negativamente aquellas solicitudes de su competencia que no aparezcan en los anexos anteriormente citados</strong>.</p>
          <p className="mb-4">Aquellas solicitudes que acrediten para convalidar <strong>una titulación universitaria o un título de FP1 o FP2 </strong>las resuelve el <strong>Ministerio de Educación </strong><strong>y Formación Profesional</strong>. Estas últimas convalidaciones se envían al centro y se trasladan al Ministerio. <strong><u>En ningún caso el alumnado podrá enviar directamente la solicitud de convalidación al Ministerio.</u></strong></p>
          <p><strong><u></u></strong></p>
        </div>
        <Nav pos={14} />
      </div>
    </>
  );
}