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
        <Titulo>¿Cómo conseguir el programa de una asignatura universitaria?</Titulo>
        <div className="text-justify">
          <div  >
            <p className="mb-2">Las convalidaciones <strong>basadas en una o varias asignaturas universitarias no se resuelven en el centro, solo se reciben y envían al Ministerio para su resolución</strong>. La experiencia nos dice que debes respetar los requisitos establecidos por el Ministerio.</p>
            <p className="mb-2">Además de la certificación académica oficial, el <strong>Ministerio exige que presentes los programas de las asignaturas sellados originalmente por la universidad</strong>. <strong>Este último requisito es indispensable. En caso de que no se envíen los programas sellados, no se podrá enviar la solicitud de convalidación. No importa si presentas el título universitario y el certificado: </strong>sin programas sellados no hay convalidación.</p>
            <p className="mb-2">¿Cómo conseguir los programas sellados? Es posible que hayas perdido los programas de cuando estudiaste en la Universidad, o si los tienes que no estén sellados, o en el peor de los casos, que ya no vivas ni siquiera donde estudiaste y no puedas desplazarte. Por eso no hay problema, siempre que tengas un poco de paciencia y quieras hacer lo que te proponemos, es muy probable que los consigas y puedas presentar tu solicitud de convalidación acompañada de los programas.</p>
            <p className="mb-2">Para ello, sigue los siguientes pasos:</p>
            <ul className="list-none ml-4" >
              <li className="relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0">Haz una lista de las asignaturas relacionadas con el módulo que quieres convalidar.</li>
              <li className="relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0">Selecciona los departamentos responsables de esas asignaturas.</li>
              <li className="relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0">Entra en la web de la Universidad en la que estudiaste y busca los departamentos del apartado anterior. Localiza el teléfono del jefe/director del departamento y la dirección de correo.</li>
              <li className="relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0">Contacta por teléfono con el departamento y/o envía un correo con la siguiente información:</li>
            </ul>
            <p className="mb-2"><em>Buenos días.</em></p>
            <p className="mb-2"><em>Mi nombre es XXXX. Cursé la licenciatura/diplomatura/grado en XXX en la Facultad de XXXX Promoción 20XX-20XX y actualmente curso otros estudios para los que necesito el programa&nbsp;<strong><u>sellado</u></strong>&nbsp;por el centro universitario en cuestión de las siguientes asignaturas:</em></p>
            <p className="mb-2"><em>XXXXX. curso, 20XX-20XX</em></p>
            <p className="mb-2"><em>XXXXX. curso, 20XX-20XX</em></p>
            <p className="mb-2"><em>Les agradecería si me pudiesen decir cómo conseguirlo o si me lo pudiesen enviar a la siguiente dirección: XXXX</em></p>
            <p className="mb-2"><em>De no ser así, dígame cómo puedo hacerlo.</em></p>
            <p className="mb-2"><em>De nuevo, gracias por su amabilidad.</em></p>
            <p className="mb-2"><em>Saludos cordiales.</em></p>
          </div>
        </div>
        <Nav pos={16} />
      </div>
    </>
  );
}
