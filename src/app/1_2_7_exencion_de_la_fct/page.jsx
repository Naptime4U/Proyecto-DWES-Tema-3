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
        <Titulo>Execención de la FCT</Titulo>
        <div>
          <div >
            <div>
              <p>El módulo profesional de Formación en Centros de Trabajo nunca será susceptible de convalidación, sino de exención total o parcial. Se podrá calificar como exento por correspondencia total o parcial con la experiencia laboral demostrable relacionada con los estudios profesionales respectivos. Para ello se requiere la matriculación previa del alumno en el módulo.</p>
              <p>Se debe acreditar, tanto para la exención total como para la parcial, una experiencia laboral equivalente al trabajo a tiempo completo de, al menos, un año, que permita demostrar que la persona solicitante tiene adquiridos los resultados de aprendizaje del módulo profesional de formación en centros de trabajo. En el caso de contratos a tiempo parcial, los días de cotización deberán ser equivalentes a un año a tiempo completo.</p>
              <p>Para solicitar la exención de la FCT&nbsp;<strong>deberás enviar por correo certificado, y preferiblemente con acuse de recibo, a la atención de la Dirección de tu centro </strong>lo siguiente:</p>
              <ul className="list-none ml-4">
                <li className="relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0"><strong>Anexo I </strong>(solicitud de exención) de la Orden de 28 de septiembre de 2011, por la que se regulan los módulos profesionales de formación en centros de trabajo y de proyecto para el alumnado matriculado en centros docentes de la Comunidad Autónoma de Andalucía. <a className="underline text-blue-500 hover:text-blue-700 hover:no-underline" href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos" target="_blank" title="Convalidaciones entre módulos profesionales" rel="noopener"><span>Puedes obtener aquí el impreso solicitud exención FCT</span></a>.</li>
                <li className="relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0"><strong>Documentación </strong><strong>acreditativa</strong> que justifique la experiencia laboral.</li>
              </ul>
            </div>
            <div>
              <div>
                <div className="rounded-2xl p-8 shadow-slate-300 shadow-[7px_7px_0px_rgb(0,0,0)] mt-4 bg-blue-200">
                  <p><b><span lang="ES">Información sobre la exención de la FCT:</span></b></p>
                  <ul className="list-none ml-4">
                    <li className="relative pl-6 before:content-['✓'] before:text-emerald-400 before:absolute before:left-0">Apartado "¿Cómo se solicita la exención del módulo profesional de Formación en Centros de Trabajo (FCT)?", en el siguiente enlace: <br /> <span><a className="underline text-blue-500 hover:text-blue-700 hover:no-underline" href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/estudiante/posibilidades-tras-formarme/convalidaciones-modulos" target="_blank" title="Convalidaciones entre módulos profesionales" rel="noopener">Convalidaciones entre módulos profesionales</a></span></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Nav pos={12} />
      </div>
    </>
  );
}
