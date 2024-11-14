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

        <Titulo>Información general: convalidaciones, exenciones y títulos</Titulo>
        <div className="flex items-center">
          <div>
            <p className="text-justify mb-4">
              Antes de empezar debemos aclarar la diferencia entre convalidación, exención y traslado de calificación. La convalidación es el procedimiento por el cual se reconoce como superado un módulo que contiene los contenidos del módulo, módulos profesionales, asignatura o unidad de competencia que se aporta. La exención solo se aplica al módulo profesional de formación en centros de trabajo y se debe aportar una experiencia profesional acreditable y de duración definida. El traslado de calificaciones es la calificación que se asigna a un módulo que posee el mismo código y denominación que otro ya cursado y superado.
            </p>
            <p>
              A continuación, se muestra información tutorial que esperamos que te sea de utilidad.
            </p>
          </div>
          <img src="/tutor-and-student.png" alt="" className="w-[12%] m-4" />
        </div>
        <div className="flex justify-center mt-11">
          <table className="w-[85%] items-center border-separate">
            <tr className="border-2">
              <th className="border-2 p-2 text-center border-spacing-2 bg-blue-200 w-1/6">
                Elaborado por:
              </th>
              <td className="border-2 border- p-2">
                Direccion General de Formación Profesional
              </td>
            </tr>
            <tr className="border-2">
              <th className="border-2 p-2 text-center bg-blue-200">
                Versión:
              </th>
              <td className="border-2 p-2">
                5
              </td>
            </tr>
            <tr className="border-2">
              <th className="border-2 p-2 text-center bg-blue-200">
                Fecha de publicación:
              </th>
              <td className="border-2 p-2">
                3/03/2022
              </td>
            </tr>
          </table>
        </div>
        <Nav pos={0} />
      </div >
    </>
  );
}
