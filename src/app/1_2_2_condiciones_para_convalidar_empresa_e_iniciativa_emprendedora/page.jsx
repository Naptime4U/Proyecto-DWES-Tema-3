import Image from "next/image";
import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import Table from "@/components/table";

export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos",
  description: "Generated by create next app",
};
const columns = [
  "Módulo a convalidar", "Formación a aportar"
]
const rows = [
  { header: "Empresa e Iniciativa Emprendedora.\n(Cualquier ciclo formativo)", values: [ 
    "Administración, gestión y comercialización en la pequeña empresa.\n(Cualquier ciclo formativo)",
    "Administración y gestión de un pequeño establecimiento comercial.\nCiclo Comercio. (Comercio y Marketing)",
    "Organización y gestión de una explotación agraria familiarCiclo Trabajos Forestales y de Conservación del Medio Natural. (RD 1713/1996, de 12 de julio). (Agraria)\nCiclo Jardinería. (RD 1714/1996, de 12 de julio). (Agraria)\nCiclo Explotaciones Agrarias Extensivas. (RD 1715/1996, de 12 de julio) (Agraria)\nCiclo Explotaciones Agrícolas Intensivas. (RD 1716/1996, de 12 de julio). (Agraria)\nCiclo Explotaciones Ganaderas. (RD 1717/1996, de 12 de julio).  (Agraria)",
    "Ciclo completo de Gestión administrativa. (RD 1662/1994, de 22 de julio). (Administración y Gestión)",
    "Administración, gestión y comercialización en la pequeña empresa.\n(Cualquier ciclo formativo)",
    "Organización y gestión de una pequeña empresa de actividades de tiempo libre y socioeducativas.\nCiclo Animación Sociocultural. (Servicios)\nSocioculturales y a la Comunidad)\nCiclo Animación de Actividades Físicas y Deportivas. (Actividades Físicas y Deportivas)\nCiclo Animación Turística. (Hostelería y Turismo)",
    "Organización y control en agencias de viajes.\nCiclo Agencias de Viajes. (Hostelería y Turismo)",
    "Administración de establecimientos de restauración.\nCiclo Restauración. (Hostelería y Turismo)",
    "Administración y gestión de una unidad/gabinete de Ortoprotésica.\nCiclo Ortoprotésica. (Sanidad)",
    "Organización, administración y gestión de una unidad/gabinete de prótesis dentales.\nCiclo Prótesis Dentales. (Sanidad)",
    "Administración y gestión de un gabinete audioprotésico.\nCiclo Audioprótesis. (Sanidad)",
    "Organización y gestión de una empresa agraria.\nCiclo Gestión y Organización de los\nRecursos Naturales y Paisajísticos. (Agraria) Ciclo Gestión y Organización de Empresas Agropecuarias. (Agraria)",
    "Ciclo completo de Administración y finanzas.\n(RD 1659/1994, de 22 de julio). (Administración y Gestión)",
    "Técnico en Gestión Administrativa LOE.  Ciclo completo",
    "Técnico en Superior en Administración y Finanzas LOE. Ciclo completo"
  ]},
  {header: "0402. Empresa e iniciativa emprendedora.", values: ["Gestión económico-administrativa en agencias de viajes.\nOrganización y control en agencias de viajes."]},
  {header: "0863. Empresa e iniciativa emprendedora.", values: ["Organización, administración y gestión de una unidad/gabinete de prótesis dentales."]},
  {header: "Empresa e Iniciativa Emprendedora.\n(Cualquier ciclo formativo LOE)", values: ["Empresa e Iniciativa Emprendedora.\n(Cualquier ciclo formativo LOE)"]}
]
export default function Home() {
  return (
    <>
      <Titulo>Condiciones para convalidar empresa e iniciativa emprendedora</Titulo>
      <div>
        <p>Para poder convalidar el módulo de&nbsp;<strong>Empresa e Iniciativa Emprendedora</strong>&nbsp;es necesario acreditar alguna de las siguientes condiciones:</p>
        <ul className="list-none ml-4">
          <li className="relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0">Tener&nbsp;<strong>aprobado el módulo de Empresa e Iniciativa Emprendedora de otro ciclo formativo</strong>, cualquiera que sea el grado, incluso en grados cruzados -medio o superior-.</li>
        </ul>
        <ul className="list-none ml-4">
          <li className="relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0">Tener&nbsp;<strong>aprobado el módulo de Administración, gestión y comercialización en la pequeña empresa</strong>&nbsp;(o con una denominación similar).</li>
        </ul>
        <ul className="list-none ml-4">
          <li className="relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0"><strong>Poseer el Título</strong> <strong>de Técnico en Gestión administrativa o Técnico </strong><strong>superior en Administración y finanzas</strong>.</li>
        </ul>
      </div>
      <Table columns={columns} rows={rows} />
      <Nav pos={7} />
    </>
  );
}