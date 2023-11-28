// AboutUs.js
import React from "react";
import "./index.css";
import Information from "../../components/Information"

const Policy = () => {
  return (
    <div className="container-information-main">
      <div>
        <Information />
      </div>
      <div>
        <h1 className="h1-information">Políticas de Privacidad</h1>
        <p>Información detallada sobre política de privacidad<br/><br/><span className="span-strong">Finalidades del tratamiento</span><br/>OPEN SERVICES SISTEMAS ELECTRONICOS SAS, tratará la información que nos proporcionan las personas interesadas con las siguientes finalidades:</p><br/>
        <ul>
          <li>Gestionar cualquier tipo de solicitud, sugerencia o petición sobre nuestros servicios profesionales que nos formulen las personas interesadas.</li>
          <li>Comunicaciones comerciales: Tratamiento de sus datos con la finalidad de informarle sobre actividades, artículos de interés e información general sobre nuestros servicios vía correo electrónico.</li>
          <li>Gestionar datos aportados por los candidatos a un puesto de trabajo a través de HOJAS DE VIDA (CV) con la finalidad de proceso de selección y reclutamiento. Usted autoriza expresamente a OPEN SERVICES SISTEMAS ELECTRONICOS SAS, para que proceda al tratamiento de sus datos para la finalidad indicada.</li>
        </ul>
        <p>OPEN SERVICES SISTEMAS ELECTRONICOS SAS. tratará sus datos e información aportada para los procesos de selección con la más estricta confidencialidad, adoptando para ello las medidas técnicas y organizativas necesarias para evitar la pérdida, mal uso, alteración y/o acceso no autorizado. Conservación de los datos: Asimismo le informamos de que OPEN SERVICES SISTEMAS ELECTRONICOS SAS. podrá conservar su Hoja de Vida (CV) por el plazo máximo de un año, concluido dicho plazo, se procederá automáticamente a su destrucción.<br/><br/><span className="span-strong">Criterios de conservación de los datos</span></p><br />
        <ul>
          <li>Gestión Hojas de vida (CV): OPEN SERVICES SISTEMAS ELECTRONICOS SAS podrá conservar su Hoja de vida (CV) por el plazo máximo de un año, concluido dicho plazo, se procederá automáticamente a su destrucción, en cumplimiento del principio de calidad del dato.</li>
          <li>Comunicaciones comerciales: Las personas interesadas, podrán darse de baja de estas comunicaciones en la siguiente dirección de correo electrónico: info@openservices.com.co</li>
          <li>El resto de los datos serán conservados durante el tiempo que sea necesario para cumplir con las finalidades anteriormente descritas.</li>
        </ul>
        <p><span className="span-strong">Legitimación</span><br/>La base legal para el tratamiento de los datos es el consentimiento de las personas interesadas para:</p>
        <ul>
          <li>La tramitación y gestión de cualquier solicitud de información o consulta sobre nuestros servicios profesionales.</li>
          <li>El envío de comunicaciones comerciales llevadas a cabo por OPEN SERVICES SISTEMAS ELECTRONICOS SAS</li>
          <li>El envío de su Hoja de vida (CV).</li>
        </ul>
        <p><span className="span-strong">Destinatarios</span><br/>No se ceden datos de carácter personal a terceros, salvo disposición legal. Tampoco se realizan transferencias internacionales de datos a terceros países.</p><br/>
        <p><span className="span-strong">Procedencia</span><br/>Los datos de carácter personal se obtienen directamente de las personas interesadas y de nuestros colaboradores. Las categorías de datos de carácter personal que nos proporciona nuestros colaboradores son las siguientes: (No se tratan datos especialmente protegidos.)</p>
        <ul>
          <li>Datos de identificación.</li>
          <li>Direcciones postales o electrónicas.</li>
        </ul>
        <p><span className="span-strong">Derechos</span><br />Derecho de Acceso, Rectificación y Supresión: Las personas interesadas tienen derecho a obtener confirmación sobre si, en OPEN SERVICES SISTEMAS ELECTRONICOS SAS, estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.<br />Derecho a la Limitación y Oposición: En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones. En determinadas circunstancias y, por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. OPEN SERVICES SISTEMAS ELECTRONICOS SAS, dejará de tratar los datos en este supuesto, salvo por motivos legítimos imperiosos, o para el ejercicio o la defensa de posibles reclamaciones.</p><br />
        <p><span className="span-strong">Actualizaciones y modificaciones</span><br />OPEN SERVICES SISTEMAS ELECTRONICOS SAS. se reserva el derecho de modificar y/o actualizar la información sobre protección de datos, cuando sea necesario para el correcto cumplimiento del Reglamento de Protección de Datos. Si se produjera alguna modificación, el nuevo texto será publicado en esta página, donde podrá tener acceso a la política actual. En cada caso, la relación con los usuarios se regirá por las normas previstas en el momento preciso en que se accede al sitio web.</p>
      </div>
    </div>
)};

export default Policy;
