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
        <Titulo>¿Cuándo tendre noticias sobre si se ha aprobado la convalidación?</Titulo>
        <div className="text-justify">
          <div  >
            <ul className="list-none ml-4" >
              <li className=" mb-4 relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0">En primer lugar, hay que recordar que <strong>solo se pueden convalidar módulos en los que estás debidamente matriculado</strong>. <strong>La matrícula solo se da por finalizada cuando concluya el pago de las tasas</strong>. Por tanto, hasta que el centro no tenga constancia del pago, no se podrá proceder a reconocer la convalidación. De esta forma, si el pago se retrasa cabría la posibilidad de que la resolución de la convalidación también se retrasara.</li>
            </ul>
            <ul className="list-none ml-4" >
              <li className="mb-4 relative pl-6 before:content-['✓'] before:text-emerald-300 before:absolute before:left-0">Si <strong>la convalidación la debe resolver el Ministerio, el plazo se alarga más, ya que</strong>&nbsp;no se puede remitir la documentación a ese organismo hasta tener la constancia del pago realizado. En los últimos años, la resolución del Ministerio ha llegado bien entrado el año nuevo. <strong>Por eso es conveniente que presentes tu solicitud lo antes posible.</strong> Una vez resuelta la convalidación, el Ministerio de Educación y Formación Profesional se pondrá directamente en contacto contigo, a través del correo electrónico que hayas facilitado en la solicitud de convalidación, para comunicarte el resultado y para que te descargues la resolución desde su Sede Electrónica. Si te han concedido la convalidación, deberás presentar la resolución en el centro para que la anoten en tu expediente académico. <strong>Es en este momento, y no antes, cuando tienes formalmente el módulo convalidado.</strong></li>
            </ul>
            <p className="mb-4"><strong>El Ministerio informa que se debe empezar a trabajar el módulo, con independencia de haber solicitado la convalidación, por si al llegar la resolución esta es negativa.&nbsp; Durante el tiempo que el Ministerio informe al alumno/a de la resolución de la convalidación del módulo solicitado, es imprescindible que participe en las actividades a distancia (entrega de tareas, participación en foros, etc.) como obligación dentro del proceso de evaluación continua.</strong></p>
          </div>
          <div className="flex justify-center">
            <img src="papel.jpg" alt="" className="w-[300px] h-[350px] border-black border-2 mt-2"/>
          </div>
        </div>
        <Nav pos={18} />
      </div>
    </>
  );
}
